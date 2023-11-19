import { createTodoDialog } from "./components/todo-dialog";
import { displayTodo } from "./components/displayTodo";
import { displayTodoList } from "./components/displayTodoList";
import More from "../assets/icons/expand-more.png";
import Less from "../assets/icons/expand-less.png";

export class View {
    constructor() {
        const dueDate = document.querySelector("#due-date").valueAsDate = new Date();
    }

    render(todoList) {
        todoList.forEach(todo => {
            displayTodo(todo.title, todo.description, todo.dueDate, todo.category, todo.priority, todo.id)
        });
    }

    renderTodoList(listOfTodoLists) {
        listOfTodoLists.forEach(todoList => {
            displayTodoList(todoList.id, todoList.title);
        });
    }

    createElement(tag, className) {
        const element = document.createElement(tag)
        if (className) element.classList.add(className)
    
        return element
      }
    
    getElement(selector) {
        const element = document.querySelector(selector)
    
        return element
      }
    
    resetInputs() {
        const title = document.querySelector("#title");
        const description = document.querySelector("#description");
        const dueDate = document.querySelector("#due-date");
        const priority = document.querySelector("#priority");
        const category = document.querySelector("#category");

        title.value = "";
        description.value = "";
        dueDate.valueAsDate = new Date();
        priority.selectedIndex = "0"
        category.value = "";
    }

    resetTodoListInput() {
        const todoListTitle = document.querySelector("#todo-list-title-input").value = "";
    }

    bindAddTodo = (handler) => {
        const submitButton = document.querySelector(".submit-button");
        submitButton.addEventListener("click", event => {
            event.preventDefault();
            handler();
            this.resetInputs();
        });
    }

    bindDeleteTodo = (handler) => {
         const todoContainer = document.querySelector(".todo-container");
         todoContainer.addEventListener("click", (event) => {
            if (event.target.classList.contains("delete-todo-btn")) {
                
                const id = event.target.parentElement.id;

                handler(id);
            }
         });
    }

    bindUnfoldTodo = (handler) => {
        const todoContainer = document.querySelector(".todo-container");
        todoContainer.addEventListener("click", (event) => {
           if (event.target.classList.contains("unfold-todo-btn")) {
               
                const id = event.target.parentElement.id;

                handler(id);
           }
        });
    }

    bindStrikeTodoThrough = (handler) => {
        const todoContainer = document.querySelector(".todo-container");
        todoContainer.addEventListener("click", (event) => {
            if (event.target.classList.contains("complete-input")) {
                const parentElement = event.target.parentElement;
                const id = parentElement.parentElement.id;

                handler(id);
            }
        })
    }

    bindSetInformationIntoForm = (handler) => {
        const todoContainer = document.querySelector(".todo-container");
        todoContainer.addEventListener("click", (event) => {
            if (event.target.classList.contains("edit-todo-btn")) {
                const id = event.target.parentElement.id;

                const updateButton = document.querySelector(".update-button");
                updateButton.classList.add(`${id}`);

                handler(id);


            };
        });
    }

    bindEditTodo = (handler) => {
        const updateButton = document.querySelector(".update-button");
        updateButton.addEventListener("click", (event) => {
            event.preventDefault();

            const classList = event.target.classList;
            const id = classList[1];
            
            handler(id);

            updateButton.classList.remove(id);
            this.resetInputs();
        })
    }

    bindAddTodoList = (handler) => {
        const addTodoListButton = document.querySelector(".submit-todo-list-button");
        addTodoListButton.addEventListener("click", (event) => {
            event.preventDefault();

            handler();

            this.resetTodoListInput();
        })
    }

    bindSwitchTodoList = (handler) => {
        const todoListContainer = document.querySelector(".todo-list-container");
        todoListContainer.addEventListener("click", (event) => {
            if (event.target.classList.contains("todo-list-title")) {
                const id = event.target.parentElement.id;
                this.highlightSelectedTodoList(id);
                handler(id);
            }
        });
    }

    bindDeleteTodoList = (handler) => {
        const todoListContainer = document.querySelector(".todo-list-container");
        todoListContainer.addEventListener("click", (event) => {
            if (event.target.classList.contains("remove-todo-list-button")) {
                const id = event.target.parentElement.id;
                
                handler(id);
            }
        })
    }

    highlightSelectedTodoList(id) {
        const todoListContainer = document.querySelector(".todo-list-container");
        const todoListContainerChildren = todoListContainer.childNodes;

        todoListContainerChildren.forEach(child => {
            if (child.classList.contains("selected")) {
                child.classList.remove("selected");
            }
            if (child.id === id) {
                child.classList.add("selected");
            }
        })
    }

    setInformationIntoTodoForm(id, todoList) {
        todoList.forEach(todo => {
            if (todo.id === id) {
                const oldTitle = document.querySelector("#title").value = todo.title;
                const description = document.querySelector("#description").value = todo.description;
                const dueDate = document.querySelector("#due-date").value = todo.dueDate;
                const priority = document.querySelector("#priority").value = todo.priority;
                const category = document.querySelector("#category").value = todo.category; 
            }
        });
    }

    unfoldTodo(id) {
        const todoElement = document.getElementById(id);
        const children = todoElement.childNodes;
        children.forEach(child => {
            if (child.classList.contains("closed")) {
                child.classList.remove("closed");
                child.classList.add("open");
                if (child.classList.contains("unfold-todo-btn")) {
                    child.style.backgroundImage = `url(${Less})`;
                };
            } else {
                child.classList.add("closed");
                child.classList.remove("open");
                if (child.classList.contains("unfold-todo-btn")) {
                    child.style.backgroundImage = `url(${More})`;
                };
            };
        });
    }

    strikeTodoThrough(id, todoList) { //method can be improved
        const todoElement = document.getElementById(id);
        const children = todoElement.childNodes;
        children.forEach(child => {
            if (child.classList.contains("todo-complete")) {
                todoList.forEach(todo => {
                    if (todo.id === id && todo.complete === false) {
                        todo.complete = true
                    } else if (todo.id === id && todo.complete === true) {
                        todo.complete = false
                    };
                });
            } else if (child.classList.contains("todo-title") || child.classList.contains("todo-description") || child.classList.contains("todo-priority") || child.classList.contains("todo-category") || child.classList.contains("todo-due-date")) {
                if (child.classList.contains("strikethrough") !== true) {
                    child.classList.add("strikethrough");
                } else if (child.classList.contains("strikethrough")) {
                    child.classList.remove("strikethrough");
                
                } 
            };
        });
    }

    removeAllTodosFromDisplay() {
        const todoElements = document.querySelectorAll(".todo-element");
        let counter = 0;
        todoElements.forEach(element => {
            if (counter !== 0) {
                element.remove();
            }
            counter++;
        })
    }

    removeAllTodoListsFromDisplay() {
        const todoElements = document.querySelectorAll(".todo-list-element");
        todoElements.forEach(element => {
            element.remove();
        })
    }

    getUserInputFromTodoForm() {
        const title = document.querySelector("#title").value;
        const description = document.querySelector("#description").value;
        const dueDate = document.querySelector("#due-date").value;
        const priority = document.querySelector("#priority").value;
        const category = document.querySelector("#category").value;

        return [title, description, dueDate, priority, category];
    }

    getUserInputFromListForm() {
        const todoListTitle = document.querySelector("#todo-list-title-input").value;

        return todoListTitle;
    }
}
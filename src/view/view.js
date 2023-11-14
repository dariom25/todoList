import { createTodoDialog } from "./components/todo-dialog";
import { displayTodo } from "./components/displayTodo";
import More from "../assets/icons/expand-more.png";
import Less from "../assets/icons/expand-less.png";

export class View {
    constructor() {
        //erstelle hier das display
    }

    render(todoList) {
        todoList.forEach(todo => {
            displayTodo(todo.title, todo.description, todo.dueDate, todo.category, todo.priority, todo.id)
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

    getUserInputFromTodoForm() {
        const title = document.querySelector("#title").value;
        const description = document.querySelector("#description").value;
        const dueDate = document.querySelector("#due-date").value;
        const priority = document.querySelector("#priority").value;
        const category = document.querySelector("#category").value;

        return [title, description, dueDate, priority, category];
    }
}
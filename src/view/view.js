import { createTodoDialog } from "./components/todo-dialog";
import { displayTodo } from "./components/displayTodo";

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

    bindAddTodo = (handler) => {
        const submitButton = document.querySelector(".submit-button");
        submitButton.addEventListener("click", event => {
            event.preventDefault();
            handler();
        });
    }

    bindDeleteTodo = (handler) => {
         const todoContainer = document.querySelector(".todo-container");
         todoContainer.addEventListener("click", (event) => {
            if (event.target.classList.contains("delete-todo-btn")) {
                
                const id = event.target.id;

                handler(id);
            }
         });
    }

    bindUnfoldTodo = (handler) => {
        const todoContainer = document.querySelector(".todo-container");
        todoContainer.addEventListener("click", (event) => {
           if (event.target.classList.contains("unfold-todo-btn")) {
               
               const id = event.target.id;

               handler(id);
           }
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
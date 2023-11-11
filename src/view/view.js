import { createTodoDialog } from "./components/todo-dialog";
import { displayTodo } from "./components/displayTodo";

export class View {
    constructor() {
        //erstelle hier das display
    }

    render(todoList) {
        todoList.forEach(todo => {
            displayTodo(todo.title, todo.description, todo.dueDate, todo.category, todo.priority)
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
        const deleteBtn = document.querySelector(".delete-todo-btn");
        deleteBtn.addEventListener("click", () => {
            handler();
        });
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
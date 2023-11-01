import { createTodoDialog } from "./components/todo-dialog";

export class View {
    constructor() {
        //erstelle hier das display
    }

    render(todo) {
        for (const property in todo) {
            console.log(todo[property]);
        }
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

    getUserInputFromTodoForm() {
        const title = document.querySelector("#title").value;
        const desciption = document.querySelector("#description").value;
        const dueDate = document.querySelector("#due-date").value;
        const priority = document.querySelector("#priority").value;
        const category = document.querySelector("#category").value;
        console.log(title, desciption, dueDate, priority, category);

        return [title, desciption];
    }
}
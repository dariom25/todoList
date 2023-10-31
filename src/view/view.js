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

    //method to add eventListeners

    createElement(tag, className) {
        const element = document.createElement(tag)
        if (className) element.classList.add(className)
    
        return element
      }
    
      getElement(selector) {
        const element = document.querySelector(selector)
    
        return element
      }

    showTodoDialog() {
        const dialog = createTodoDialog();
        const content = document.querySelector("#content");
        content.appendChild(dialog);
        dialog.showModal();
        
        const submitButton = document.querySelector(".submit-button");
        submitButton.addEventListener("click", () => {
            const userInput = this.getUserInputFromTodoDialog.bind(this);
            console.log(userInput);
        });
    }

    getUserInputFromTodoDialog() {
        const title = document.querySelector("#title").value;
        const desciption = document.querySelector("#description").value;
        console.log(title, desciption);

        return [title, desciption];
    }
}
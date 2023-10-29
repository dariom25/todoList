import { createDialog } from "./components/todo-dialog";

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

    showDialog() {
        const dialog = createDialog();
        const content = document.querySelector("#content");
        content.appendChild(dialog);
        dialog.showModal();
        
    }

}
import { createTextElement } from "../utils/dom-manipulation.js";

export class Todo {
    constructor(title, desciption) {
        this.title = title;
        this.desciption = desciption;
        this.id = this.generateUniqueId();
    }

    editTodo(title, desciption) {   
        this.title = title;
        this.desciption = desciption;
    }

    //getVaulues

    generateUniqueId() {
        const timestamp = Date.now();
        const randomNumber = Math.floor(Math.random() * 1000000);
        // Combine the timestamp and random number to create a unique ID
        const uniqueId = `${timestamp}-${randomNumber}`;
        return uniqueId;
      }
}
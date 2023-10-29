import { createTextElement } from "../../utils/dom-manipulation.js";
import { generateUniqueId } from "../../utils/unique-id.js";

export class Todo {
    constructor(title, desciption, id = generateUniqueId()) {
        this.title = title;
        this.desciption = desciption;
        this.id = id;
    }

    editTodo(title, desciption) {   
        this.title = title;
        this.desciption = desciption;
    }

    //getVaulues
}
import { createTextElement } from "../../utils/dom-manipulation.js";

export class Todo {
    constructor(title, desciption) {
        this.title = createTextElement(title, "class", "title");
        this.desciption = createTextElement(desciption, "class", "desciption");
    }


}
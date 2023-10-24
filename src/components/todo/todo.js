import { createTextElement } from "../../utils/dom-manipulation.js";

export class Todo {
    constructor(title) {
        this.title = createTextElement(title, "class", "title");
    }


}
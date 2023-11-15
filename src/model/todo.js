import { generateUniqueId } from "../utils/unique-id";

export class Todo {
    constructor(title, description, dueDate, priority, category) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.category = category;
        this.complete = false;
        this.id = generateUniqueId();
    }

    editTodo(userInput) {   
        this.title = userInput[0];
        this.description = userInput[1];
        this.dueDate = userInput[2];
        this.priority = userInput[3];
        this.category = userInput[4];
    }

}
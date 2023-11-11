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

    editTodo(title, desciption) {   
        this.title = title;
        this.desciption = desciption;
    }

}
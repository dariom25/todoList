import { generateUniqueId } from "../utils/unique-id";

export class Todo {
    constructor(title, desciption) {
        this.title = title;
        this.desciption = desciption;
        this.id = generateUniqueId();
    }

    editTodo(title, desciption) {   
        this.title = title;
        this.desciption = desciption;
    }

    //getVaulues

}
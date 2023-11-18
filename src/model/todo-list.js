import { generateUniqueId } from "../utils/unique-id";

export class TodoList{
    constructor(title) {
        this.todoList = [];
        this.title = title;
        this.id = generateUniqueId();
    }

    addTodo(todo) {
        this.todoList.push(todo);
    }

    deleteTodo(id) {
        this.todoList = this.todoList.filter((element) => element.id !== id)
    }
}
import { generateUniqueId } from "../utils/unique-id";

export class TodoList{
    constructor(projectName) {
        this.todoList = [];
        this.projectName = projectName;
        this.id = generateUniqueId();
    }

    addTodo(todo) {
        this.todoList.push(todo);
    }

    deleteTodo(todo) {
        this.todoList = this.todoList.filter((element) => element.id !== todo.id)
    }

    
}
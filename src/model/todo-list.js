import { Todo } from "./todo";

export class Project{
    constructor(projectName) {
        this.todoList = [];
        this.projectName = projectName;
    }

    addTodo(todo) {
        this.todoList.push(todo);
    }

    //deleteTodo

    
}
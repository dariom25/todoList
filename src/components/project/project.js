import { Todo } from "../todo/todo";

export class Project{
    constructor(projectName) {
        this.todoList = [];
        this.projectName = projectName;
    }

    addTodo(todo) {
        this.todoList.push(todo);
    }

    render() {
        //render stuff
    }
}
import { Todo } from "../model/todo";
import { TodoList } from "../model/todo-list";
import { View } from "../view/view";

export class Controller {
    constructor(todoListModel, view) {
        this.todoListModel = todoListModel;
        this.view = view;
        this.bindEvents();
    }

    _createNewTodo() {
        const userInput = this.view.getUserInputFromTodoForm();
        const newTodo = new Todo(userInput[0], userInput[1], userInput[2], userInput[3], userInput[4]); //die userinputs müssen noch angepasst werden

        return newTodo;
    }

    handleAddTodo = () => {
        const todo = this._createNewTodo();
        this.todoListModel.addTodo(todo);
        this.view.removeAllTodosFromDisplay(); 
        this.view.render(this.todoListModel.todoList);
    }

    bindEvents() {
        this.view.bindAddTodo(this.handleAddTodo);
    }
}


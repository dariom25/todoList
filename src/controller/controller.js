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
        const newTodo = new Todo(userInput[0], userInput[1]); //die userinputs müssen noch angepasst werden

        return newTodo;
    }

    handleAddTodo = () => {
        const todo = this._createNewTodo();
        this.todoListModel.addTodo(todo); 
        this.view.render(this.todoListModel.todoList); //bisher werden nur title und checkbox angezeigt. liegt der fehler an dem kommentar oben oder werden die anderen felder nicht richtig gegetted
    }

    bindEvents() {
        this.view.bindAddTodo(this.handleAddTodo);
    }
}


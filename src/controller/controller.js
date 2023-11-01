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
        const userInput = ["UserInput1", "UserInput2"];
        const newTodo = new Todo(userInput[0], userInput[1]);

        return newTodo;
    }

    handleAddTodo = () => {
        this.todoListModel.addTodo(this._createNewTodo());
        console.log(this.todoListModel.todoList);
    }

    bindEvents() {
        this.view.bindShowTodoDialog(this.handleAddTodo);
    }
}


import { Todo } from "../model/todo";
import { TodoList } from "../model/todo-list";
import { View } from "../view/view";

export class Controller {
    constructor(todoListModel, view, todoModel) {
        this.todoListModel = todoListModel;
        this.view = view;
        this.todoModel = todoModel;
        this.bindEvents();
    }

    _createNewTodo() { //das ist logik und müsste ins model
        const userInput = this.view.getUserInputFromTodoForm();
        const newTodo = new Todo(userInput[0], userInput[1], userInput[2], userInput[3], userInput[4]);

        return newTodo;
    }

    handleAddTodo = () => {
        this.todoListModel.addTodo(this._createNewTodo());
        this.updateDisplay();
    }

    handleDeleteTodo = (id) => {
        this.todoListModel.deleteTodo(id);
        this.updateDisplay();
    }

    handleUnfoldTodo = (id) => {
        this.view.unfoldTodo(id);
    }

    handleStrikeTodoThrough = (id) => {
        this.view.strikeTodoThrough(id, this.todoListModel.todoList);
    }

    handleSetTodoIntoForm = (id) => {
        this.view.setInformationIntoTodoForm(id, this.todoListModel.todoList)
    }



    updateDisplay() {
        this.view.removeAllTodosFromDisplay(); 
        this.view.render(this.todoListModel.todoList);
    }

    bindEvents() {
        this.view.bindAddTodo(this.handleAddTodo);
        this.view.bindDeleteTodo(this.handleDeleteTodo);
        this.view.bindUnfoldTodo(this.handleUnfoldTodo);
        this.view.bindStrikeTodoThrough(this.handleStrikeTodoThrough);
        this.view.bindSetInformationIntoForm(this.handleSetTodoIntoForm);
    }
}


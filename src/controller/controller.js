import { Todo } from "../model/todo";
import { TodoList } from "../model/todo-list";
import { View } from "../view/view";

export class Controller {
    constructor(todoListModel, view) {
        this.todoListModel = todoListModel;
        this.view = view;
        this.bindEvents();
        this.listOfTodoLists = [];
    }

    _createNewTodo() { //das ist logik und müsste ins model
        const userInput = this.view.getUserInputFromTodoForm();
        const newTodo = new Todo(userInput[0], userInput[1], userInput[2], userInput[3], userInput[4]);

        return newTodo;
    }

    createNewTodoList() {
        const newTodoList = new TodoList(this.view.getUserInputFromListForm());

        return newTodoList;
    }

    addTodoList(todoList) {
        this.listOfTodoLists.push(todoList);
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

    handleEditTodo = (id) => {
        const userInput = this.view.getUserInputFromTodoForm();
        this.todoListModel.todoList.forEach(todo => {
            if (todo.id === id) {
                todo.editTodo(userInput);
            };
        });
        this.updateDisplay();
    }

    handleAddTodoList = () => {
        this.addTodoList(this.createNewTodoList());
        this.updateTodoListDisplay();
    }

    updateDisplay() {
        this.view.removeAllTodosFromDisplay(); 
        this.view.render(this.todoListModel.todoList);
    }

    updateTodoListDisplay() {
        this.view.removeAllTodoListsFromDisplay();
        this.view.renderTodoList(this.listOfTodoLists);
    }

    bindEvents() {
        this.view.bindAddTodo(this.handleAddTodo);
        this.view.bindDeleteTodo(this.handleDeleteTodo);
        this.view.bindUnfoldTodo(this.handleUnfoldTodo);
        this.view.bindStrikeTodoThrough(this.handleStrikeTodoThrough);
        this.view.bindSetInformationIntoForm(this.handleSetTodoIntoForm);
        this.view.bindEditTodo(this.handleEditTodo);
        this.view.bindAddTodoList(this.handleAddTodoList);
    }
}


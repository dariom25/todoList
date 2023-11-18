import { Todo } from "../model/todo";
import { TodoList } from "../model/todo-list";
import { View } from "../view/view";

export class Controller {
    constructor(todoListModel, view) {
        this.todoListModel = todoListModel;
        this.view = view;
        this.listOfTodoLists = [this.todoListModel];
        this.currentTodoListID = this.todoListModel.id
        this.bindEvents();
        this.displayCurrentTodoList();
        this.updateTodoListDisplay();

    }

    _createNewTodo() { //das ist logik und müsste ins model
        const userInput = this.view.getUserInputFromTodoForm();
        const newTodo = new Todo(userInput[0], userInput[1], userInput[2], userInput[3], userInput[4]);

        return newTodo;
    }

    setTodoListID(id) {
        this.currentTodoListID = id;
    }

    getCurrentTodoList() {
        let currentTodoList = undefined
        this.listOfTodoLists.forEach(list => {
            if (list.id === this.currentTodoListID) {
                currentTodoList = list;
                return;

            }
        });
        return currentTodoList;
    }

    createNewTodoList() {
        const newTodoList = new TodoList(this.view.getUserInputFromListForm());

        return newTodoList;
    }

    addTodoList(todoList) {
        this.listOfTodoLists.push(todoList);
    }

    handleAddTodo = () => {
        const currentTodoList = this.getCurrentTodoList();
        currentTodoList.addTodo(this._createNewTodo());
        this.displayCurrentTodoList();
    }

    handleDeleteTodo = (id) => {
        const currentTodoList = this.getCurrentTodoList();
        currentTodoList.deleteTodo(id);
        this.displayCurrentTodoList();
    }

    handleUnfoldTodo = (id) => {
        this.view.unfoldTodo(id);
    }

    handleStrikeTodoThrough = (id) => {
        const currentTodoList = this.getCurrentTodoList();
        this.view.strikeTodoThrough(id, currentTodoList.todoList);
    }

    handleSetTodoIntoForm = (id) => {
        const currentTodoList = this.getCurrentTodoList();
        
        this.view.setInformationIntoTodoForm(id, currentTodoList.todoList)
    }

    handleEditTodo = (id) => {
        const userInput = this.view.getUserInputFromTodoForm();
        const currentTodoList = this.getCurrentTodoList();
        currentTodoList.todoList.forEach(todo => {
            if (todo.id === id) {
                todo.editTodo(userInput);
            };
        });
        this.displayCurrentTodoList();
    }

    handleAddTodoList = () => {
        this.addTodoList(this.createNewTodoList());
        this.updateTodoListDisplay();
    }

    handleSwitchTodoList = (ListID) => { //irgendwas funktioniert hier noch nicht
        this.setTodoListID(ListID);
        this.displayCurrentTodoList();
    }

    displayCurrentTodoList() {
        this.view.removeAllTodosFromDisplay(); 
        const currentTodoList = this.getCurrentTodoList();
        this.view.render(currentTodoList.todoList);
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
        this.view.bindSwitchTodoList(this.handleSwitchTodoList);
    }
}


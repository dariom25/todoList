import { Todo } from "../model/todo";
import { TodoList } from "../model/todo-list";
import { View } from "../view/view";

export class Controller {
    constructor(todoListModel, view) {
        this.todoListModel = todoListModel;
        this.view = view;
        this.listOfTodoLists = [];
        this.retrieveDataOrInitializeData();
        this.currentTodoListID = this.listOfTodoLists[0].id;
        this.bindEvents();
        this.displayCurrentTodoList();
        this.updateTodoListDisplay();
        this.view.highlightSelectedTodoList(this.currentTodoListID);
        this.loadDataIntoStorage();
    }

    loadDataIntoStorage() {
        localStorage.clear();
        this.listOfTodoLists.forEach(element => {
            localStorage.setItem(element.title, JSON.stringify(element));
        })
    }
    
    fetchDataFromStorage() {
        for (const key in localStorage) {
            if (localStorage.hasOwnProperty(key)) {
                const todoListFromStorage = JSON.parse(localStorage.getItem(key));
                const todoList = new TodoList("");
                Object.assign(todoList, todoListFromStorage);
                this.addTodoList(todoList);
            }
        }
    }

    retrieveDataOrInitializeData() {
        if (localStorage.length === 0) {
            this.addTodoList(this.todoListModel)
        } else {
            this.fetchDataFromStorage();
        }
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
        let currentTodoList = undefined;
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
        this.loadDataIntoStorage();
    }

    handleDeleteTodo = (id) => {
        const currentTodoList = this.getCurrentTodoList();
        currentTodoList.deleteTodo(id);
        this.displayCurrentTodoList();
        this.loadDataIntoStorage();

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
        this.loadDataIntoStorage();

    }

    handleAddTodoList = () => {
        const todoList = this.createNewTodoList();
        this.addTodoList(todoList);
        this.setTodoListID(todoList.id);
        this.updateTodoListDisplay();
        this.view.highlightSelectedTodoList(this.currentTodoListID);
        this.displayCurrentTodoList();
        this.loadDataIntoStorage();

    }

    handleSwitchTodoList = (ListID) => {
        this.setTodoListID(ListID);
        this.displayCurrentTodoList();
    }

    handleDeleteTodoList = (ListID) => {
        this.deleteTodoList(ListID);

        if (this.listOfTodoLists.length === 0) {
            this.currentTodoListID = [];
        } else {
            this.setTodoListID(this.listOfTodoLists[0].id);
        }
        this.displayCurrentTodoList();
        this.updateTodoListDisplay();
        this.view.highlightSelectedTodoList(this.currentTodoListID);
        this.loadDataIntoStorage();
    }

    deleteTodoList(ListID) {
        this.listOfTodoLists = this.listOfTodoLists.filter((element) => element.id !== ListID);
    }

    displayCurrentTodoList() {
        this.view.removeAllTodosFromDisplay(); 
        if (this.listOfTodoLists.length !== 0) {
            const currentTodoList = this.getCurrentTodoList();
            this.view.render(currentTodoList.todoList);
        }

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
        this.view.bindDeleteTodoList(this.handleDeleteTodoList);
    }
}


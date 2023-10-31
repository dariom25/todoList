import _ from 'lodash';
import "./assets/content.css";
import "./assets/header.css";
import "./assets/todos.css";
import "./assets/todo-list.css";
import "./assets/dialog.css";
import { Todo } from './model/todo-model';
import { Project } from './model/project-model';
import { generateUniqueId } from './utils/unique-id';
import { View } from './view/view';

const todo1 = new Todo("Das ist ein Titel", "Das ist eine Beschreibung");
const view = new View();

const showButton = document.querySelector(".create-todo");
showButton.addEventListener("click", view.showTodoDialog);


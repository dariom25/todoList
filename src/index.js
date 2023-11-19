import _ from 'lodash';
import "./assets/content.css";
import "./assets/header.css";
import "./assets/todos.css";
import "./assets/todo-list.css";
import "./assets/todo-form.css";
import "./assets/root.css";
import { TodoList } from './model/todo-list.js';
import { View } from './view/view';
import { Controller } from './controller/controller';
import { Todo } from './model/todo.js';

const controller = new Controller(new TodoList("My Todo List"), new View());

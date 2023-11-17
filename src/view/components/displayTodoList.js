export function displayTodoList(id, title) {
    const todoListContainer = document.querySelector(".todo-list-container");
    
    const todoListElement = document.createElement("div");
    todoListElement.classList.add("todo-list-element");
    todoListElement.classList.add(id);

    const todoListTitle = document.createElement("div");
    todoListTitle.classList.add("todo-list-title");
    todoListTitle.textContent = title;
    todoListElement.appendChild(todoListTitle);

    const removeTodoListBtn = document.createElement("button");
    removeTodoListBtn.classList.add("remove-todo-list-button");
    todoListElement.appendChild(removeTodoListBtn);

    todoListContainer.appendChild(todoListElement);
}
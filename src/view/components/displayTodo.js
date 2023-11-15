import Expand from "../../assets/icons/expand-more.png";

export function displayTodo(title, description, dueDate, category, priority, id) {
    const todosContainer = document.querySelector(".todos");
    const todoContainer = document.querySelector(".todo-container");
    todosContainer.appendChild(todoContainer);
    
    const todoElement = document.createElement("div");
    todoElement.setAttribute("class", "todo-element");
    todoElement.setAttribute("id", `${id}`);
    todoContainer.appendChild(todoElement);

    const todoTitle = document.createElement("div");
    todoTitle.setAttribute("class", "todo-title");
    todoTitle.classList.add("closed");
    todoTitle.textContent = title;
    todoElement.appendChild(todoTitle);

    const todoDescription = document.createElement("div");
    todoDescription.setAttribute("class", "todo-description");
    todoDescription.classList.add("closed");
    todoDescription.textContent = description;
    todoElement.appendChild(todoDescription);

    const todoDueDate = document.createElement("div");
    todoDueDate.setAttribute("class", "todo-due-date");
    todoDueDate.classList.add("closed");
    todoDueDate.textContent = dueDate;
    todoElement.appendChild(todoDueDate);

    const todoCategory = document.createElement("div");
    todoCategory.setAttribute("class", "todo-category");
    todoCategory.classList.add("closed");
    todoCategory.textContent = category;
    todoElement.appendChild(todoCategory);

    const todoPriority = document.createElement("div");
    todoPriority.setAttribute("class", "todo-priority");
    todoPriority.classList.add("closed");
    todoPriority.textContent = priority;
    todoElement.appendChild(todoPriority);

    const completeContainer = document.createElement("div");
    const todoComplete = document.createElement("input");
    todoComplete.type = "checkbox";
    todoComplete.classList.add("complete-input");
    completeContainer.setAttribute("class", "todo-complete");
    completeContainer.classList.add("closed");
    todoElement.appendChild(completeContainer);
    completeContainer.appendChild(todoComplete);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-todo-btn");
    deleteBtn.classList.add("closed");
    todoElement.appendChild(deleteBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo-btn");
    editBtn.classList.add("closed");
    todoElement.appendChild(editBtn);

    const unfoldBtn = document.createElement("button");
    unfoldBtn.classList.add("unfold-todo-btn");
    unfoldBtn.classList.add("closed");
    todoElement.appendChild(unfoldBtn);
}
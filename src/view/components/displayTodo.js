export function displayTodo(title, description, dueDate, category, priority) {
    const todosContainer = document.querySelector(".todos");
    const todoContainer = document.querySelector(".todo-container");
    todosContainer.appendChild(todoContainer);
    
    const todoElement = document.createElement("div");
    todoElement.setAttribute("class", "todo-element");
    todoContainer.appendChild(todoElement);

    const todoTitle = document.createElement("div");
    todoTitle.setAttribute("class", "todo-title");
    todoTitle.textContent = title;
    todoElement.appendChild(todoTitle);

    const todoDescription = document.createElement("div");
    todoDescription.setAttribute("class", "todo-description");
    todoDescription.textContent = description;
    todoElement.appendChild(todoDescription);

    const todoDueDate = document.createElement("div");
    todoDueDate.setAttribute("class", "todo-due-date");
    todoDueDate.textContent = dueDate;
    todoElement.appendChild(todoDueDate);

    const todoCategory = document.createElement("div");
    todoCategory.setAttribute("class", "todo-category");
    todoCategory.textContent = category;
    todoElement.appendChild(todoCategory);

    const todoPriority = document.createElement("div");
    todoPriority.setAttribute("class", "todo-priority");
    todoPriority.textContent = priority;
    todoElement.appendChild(todoPriority);

    const completeContainer = document.createElement("div");
    const todoComplete = document.createElement("input");
    todoComplete.type = "checkbox"; //hier muss vielleicht nochmal geprüft werden, ob das alles korrekt angezeigt wird
    completeContainer.setAttribute("class", "todo-complete")
    todoElement.appendChild(completeContainer);
    completeContainer.appendChild(todoComplete);

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "delete-todo-btn");
    deleteBtn.textContent = "X";
    todoElement.appendChild(deleteBtn);

    const editBtn = document.createElement("button");
    editBtn.setAttribute("class", "edit-todo-btn");
    editBtn.textContent = "Edit";
    todoElement.appendChild(editBtn);
}
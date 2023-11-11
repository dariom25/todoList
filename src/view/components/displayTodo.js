export function displayTodo(title, description, dueDate, category, priority) {
    const todosContainer = document.querySelector(".todos");
    const todoContainer = document.createElement("div");
    todoContainer.setAttribute("class", "todo-container");
    todosContainer.appendChild(todoContainer);
    
    const todo = document.createElement("div");
    todo.setAttribute("class", "todo-element");
    todoContainer.appendChild(todo);

    const todoTitle = document.createElement("div");
    todoTitle.setAttribute("class", "todo-title");
    todoTitle.textContent = title;
    todo.appendChild(todoTitle);

    const todoDescription = document.createElement("div");
    todoDescription.setAttribute("class", "todo-description");
    todoDescription.textContent = description;
    todo.appendChild(todoDescription);

    const todoDueDate = document.createElement("div");
    todoDueDate.setAttribute("class", "todo-due-date");
    todoDueDate.textContent = dueDate;
    todo.appendChild(todoDueDate);

    const todoCategory = document.createElement("div");
    todoCategory.setAttribute("class", "todo-category");
    todoCategory.textContent = category;
    todo.appendChild(todoCategory);

    const todoPriority = document.createElement("div");
    todoPriority.setAttribute("class", "todo-priority");
    todoPriority.textContent = priority;
    todo.appendChild(todoPriority);

    const todoComplete = document.createElement("input");
    todoComplete.type = "checkbox"; //hier muss vielleicht nochmal geprüft werden, ob das alles korrekt angezeigt wird
    todo.appendChild(todoComplete);
}
export function displayTodo() {//argumente fehlen hier noch und textContent und so muss noch eingefügt werden
    const content = document.querySelector("#content");
    const todoContainer = document.createElement("div");
    todoContainer.setAttribute("class", "todo-container");
    
    const todo = document.createElement("div");
    todo.setAttribute("class", "todo-element");

    const todoTitle = document.createElement("div");
    todoTitle.setAttribute("class", "todo-title");
    todo.appendChild(todoTitle);

    const todoDescription = document.createElement("div");
    todoDescription.setAttribute("class", "tood-description");
    todo.appendChild(todoDescription);

    const todoDueDate = document.createElement("div");
    todoDueDate.setAttribute("class", "todo-due-date");
    todo.appendChild(todoDueDate);

    const todoCategory = document.createElement("div");
    todoCategory.setAttribute("class", "todo-category");
    todo.appendChild(todoCategory);

    const todoPriority = document.createElement("div");
    todoPriority.setAttribute("class", "todo-prioriy");
    todo.appendChild(todoPriority);

    const todoComplete = document.createElement("input");
    todoComplete.type = "checkbox";
    todo.appendChild(todoComplete);
}
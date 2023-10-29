export function createDialog() {
    const dialog = document.createElement("dialog");

    const dialogTitle = document.createElement("p");
    dialogTitle.textContent = "Add your ToDo";
    dialogTitle.setAttribute("class", "dialog-title");

    const form = document.createElement("form");

    //title
    const titleContainer = document.createElement("div");
    titleContainer.setAttribute("class", "title-container");
    const titleLabel = document.createElement("label");
    titleLabel.for = "title";
    titleLabel.textContent = "Title:";
    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.placeholder = "Add your ToDo";
    titleInput.name = "title";
    titleInput.id = "title";
    titleContainer.appendChild(titleLabel, titleInput);


    //description
    const descriptionContainer = document.createElement("div");
    descriptionContainer.setAttribute("class", "description-container");
    const descriptionLabel = document.createElement("label");
    descriptionLabel.for = "description";
    const descriptionInput = document.createElement("input");
    descriptionInput.type = "text";
    descriptionInput.placeholder = "Describe your ToDo";
    descriptionInput.name = "description";
    descriptionInput.id = "description";
    descriptionContainer.appendChild(descriptionLabel, descriptionInput);

    //submitButton
    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit";

    form.appendChild(titleContainer, descriptionContainer, submitButton);
    dialog.appendChild(form);
}
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
    titleContainer.appendChild(titleLabel);
    titleContainer.appendChild(titleInput);



    //description
    const descriptionContainer = document.createElement("div");
    descriptionContainer.setAttribute("class", "description-container");
    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Description:"
    descriptionLabel.for = "description";
    const descriptionInput = document.createElement("input");
    descriptionInput.type = "text";
    descriptionInput.placeholder = "Describe your ToDo";
    descriptionInput.name = "description";
    descriptionInput.id = "description";
    descriptionContainer.appendChild(descriptionLabel);
    descriptionContainer.appendChild(descriptionInput);


    //submitButton
    const submitButton = document.createElement("button");
    submitButton.classList.add("submit-button"); // irgendwas ist hier mit den css klassen komisch
    submitButton.textContent = "Submit";

    //closeButton
    const closeButton = document.createElement("button");
    closeButton.classList.add("close-button"); // irgendwas ist hier mit den css klassen komisch
    closeButton.textContent = "X";

    form.appendChild(titleContainer);
    form.appendChild(descriptionContainer);
    form.appendChild(submitButton);
    form.appendChild(closeButton);
    form.appendChild(dialogTitle);


    dialog.appendChild(form);

    return dialog;
}
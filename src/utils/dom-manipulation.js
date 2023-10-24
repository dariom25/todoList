export function createTextElement(text = "default text", selector = "class", selectorName = "default-class") {
    const textElement = document.createElement("div");
    textElement.textContent = `${text}`;
    textElement.setAttribute(selector, selectorName);

    return textElement;    
}
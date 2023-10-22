import { getTitle } from "./title/title.js";
import { getDescription } from "./description/description.js";
import { getDueDate } from "./dueDate/dueDate.js";
import { getPriority } from "./priority/priority.js";
import { getStatus } from "./status/status.js";
import { getCategory } from "./category/category.js";

export function createToDoObject(title, description, date, priority, status, category) {
    const newTitle = getTitle(title);
    const newDescription = getDescription(description);
    const newDueDate = getDueDate(date);
    const newPriority = getPriority(priority);
    const newStatus = getStatus(status);
    const newCategory = getCategory(category);

    return { newTitle, newDescription, newDueDate, newPriority, newStatus, newCategory };
}
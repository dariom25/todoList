import { getTitle } from "./title/title.js";
import { getDescription } from "./description/description.js";
import { getDueDate } from "./dueDate/dueDate.js";
import { getPriority } from "./priority/priority.js";
import { getStatus } from "./status/status.js";
import { getCategory } from "./category/category.js";

export function createToDoObject(title, description, date, priority, status, category) {
    const myTitle = getTitle(title);
    const myDescription = getDescription(description);
    const myDueDate = getDueDate(date);
    const myPriority = getPriority(priority);
    const myStatus = getStatus(status);
    const myCategory = getCategory(category);

    return { myTitle, myDescription, myDueDate, myPriority, myStatus, myCategory };
}
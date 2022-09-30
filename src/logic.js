export default function Project(title) {
    this.title = title;
}

export function Todo(title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
}
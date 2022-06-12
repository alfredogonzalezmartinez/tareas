import { PRIORITY } from "./priority.enum";

export class Task {
  #id = null;
  #description = "";
  #priority = PRIORITY.NORMAL;
  #isCompleted = false;

  constructor({ id, description, priority, isCompleted }) {
    this.id = id;
    this.description = description;
    this.priority = priority;
    this.isCompleted = isCompleted;
  }

  set id(id) {
    if (id && typeof id === "string") return (this.#id = id);
    if (!this.#id) this.#id = crypto.randomUUID();
  }

  get id() {
    return this.#id;
  }

  set description(description) {
    if (typeof description === "string") this.#description = description;
  }

  get description() {
    return this.#description;
  }

  set priority(priority) {
    if (PRIORITY[priority]) this.#priority = priority;
  }

  get priority() {
    return this.#priority;
  }

  set isCompleted(isCompleted) {
    if (typeof isCompleted === "boolean") this.#isCompleted = isCompleted;
  }

  get isCompleted() {
    return this.#isCompleted;
  }

  toJSON() {
    return {
      id: this.id,
      description: this.description,
      priority: this.priority,
      isCompleted: this.isCompleted,
    };
  }
}

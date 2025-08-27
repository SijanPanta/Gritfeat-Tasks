import {
  addTask,
  listTasks,
  updateTask,
  toggleTask,
  removeTask,
  clearTasks,
} from "./todoService";
import { getLogs } from "./logService";

const [,, command, ...args] = process.argv;

switch (command) {
  case "add":
    addTask(args.join(" "));
    console.log("Task added!");
    break;

  case "list":
    console.table(listTasks());
    break;

  case "update":
    updateTask(args[0], args.slice(1).join(" "))
      ? console.log("Task updated!")
      : console.log("Task not found!");
    break;

  case "toggle":
    toggleTask(args[0])
      ? console.log("Task toggled!")
      : console.log("Task not found!");
    break;

  case "remove":
    removeTask(args[0])
      ? console.log("Task removed!")
      : console.log("Task not found!");
    break;

  case "clear":
    clearTasks(args[0] === "done");
    console.log("Tasks cleared!");
    break;

  case "logs":
    console.table(getLogs());
    break;

  default:
    console.log(`
Usage:
  add "Task title"       Add new task
  list                   List tasks
  update <id> "new title" Update task title
  toggle <id>            Toggle done/undone
  remove <id>            Remove a task
  clear [done]           Clear all or only done
  logs                   Show logs
    `);
}

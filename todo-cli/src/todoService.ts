import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { addLog } from "./logService";

const todosFile = path.join(__dirname, "../data/todos.json");

type Todo = {
  id: string;
  title: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
};

function readTodos(): Todo[] {
  if (!fs.existsSync(todosFile)) return [];
  return JSON.parse(fs.readFileSync(todosFile, "utf-8") || "[]");
}

function writeTodos(todos: Todo[]) {
  fs.writeFileSync(todosFile, JSON.stringify(todos, null, 2));
}


export function addTask(title: string) {
  const todos = readTodos();
  const newTask: Todo = {
    id: uuidv4(),
    title,
    done: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  todos.push(newTask);
  writeTodos(todos);
  addLog("add", newTask.id, `Added task: ${title}`);
}

export function listTasks(): Todo[] {
  const todos = readTodos();
  addLog("list", null, `Listed ${todos.length} tasks`);
  return todos;
}

export function updateTask(id: string, newTitle: string) {
  const todos = readTodos();
  const task = todos.find((t) => t.id === id);
  if (!task) return false;
  task.title = newTitle;
  task.updatedAt = new Date().toISOString();
  writeTodos(todos);
  addLog("update", id, `Updated title to: ${newTitle}`);
  return true;
}

export function toggleTask(id: string) {
  const todos = readTodos();
  const task = todos.find((t) => t.id === id);
  if (!task) return false;
  task.done = !task.done;
  task.updatedAt = new Date().toISOString();
  writeTodos(todos);
  addLog("toggle", id, `Toggled task to ${task.done ? "done" : "undone"}`);
  return true;
}

export function removeTask(id: string) {
  let todos = readTodos();
  const before = todos.length;
  todos = todos.filter((t) => t.id !== id);
  if (todos.length === before) return false;
  writeTodos(todos);
  addLog("remove", id, `Removed task`);
  return true;
}

export function clearTasks(onlyDone = false) {
  let todos = readTodos();
  const before = todos.length;
  if (onlyDone) {
    todos = todos.filter((t) => !t.done);
  } else {
    todos = [];
  }
  writeTodos(todos);
  addLog("clear", null, `Cleared ${before - todos.length} task(s)`);
}

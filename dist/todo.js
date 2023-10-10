"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.getTodos = exports.addTodo = void 0;
let todos = [];
const addTodo = (task) => {
    const newTodo = {
        id: Date.now(),
        task,
    };
    todos.push(newTodo);
    return newTodo;
};
exports.addTodo = addTodo;
const getTodos = () => {
    return todos;
};
exports.getTodos = getTodos;
const deleteTodo = (id) => {
    todos = todos.filter((todo) => todo.id !== id);
};
exports.deleteTodo = deleteTodo;

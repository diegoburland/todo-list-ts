"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_1 = require("./todo");
const app = (0, express_1.default)();
const PORT = 3000;
app.get("/", (req, res) => {
    res.send("To-Do list app is running");
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
app.use(express_1.default.json());
app.get("/todos", (req, res) => {
    const todos = (0, todo_1.getTodos)();
    res.json(todos);
});
app.post("/todos", (req, res) => {
    const { task } = req.body;
    if (task && typeof task === "string") {
        const newTodo = (0, todo_1.addTodo)(task);
        res.json(newTodo);
    }
    else {
        res.status(400).json({ error: "Task is required and should be a string" });
    }
});
app.delete("/todo/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (!isNaN(id)) {
        (0, todo_1.deleteTodo)(id);
        res.json({ success: true });
    }
    else {
        res.status(400).json({ error: "Invalid Id" });
    }
});

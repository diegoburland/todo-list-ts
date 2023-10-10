import express, { Request, Response } from "express";
import { addTodo, getTodos, deleteTodo } from "./todo";

const app = express();
const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("To-Do list app is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use(express.json());

app.get("/todos", (req: Request, res: Response) => {
  const todos = getTodos();
  res.json(todos);
});

app.post("/todos", (req: Request, res: Response) => {
  const { task } = req.body;
  if (task && typeof task === "string") {
    const newTodo = addTodo(task);
    res.json(newTodo);
  } else {
    res.status(400).json({ error: "Task is required and should be a string" });
  }
});

app.delete("/todo/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  if (!isNaN(id)) {
    deleteTodo(id);
    res.json({ success: true });
  } else {
    res.status(400).json({ error: "Invalid Id" });
  }
});

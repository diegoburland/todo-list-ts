import { addTodo, getTodos, deleteTodo } from "../todo";

describe("todos tests", () => {
  it("should add a todo", () => {
    const task = "Learn Jest";
    const todo = addTodo(task);
    expect(todo.task).toBe(task);
    expect(getTodos()).toContainEqual(todo);
  });

  it("should get all todos", () => {
    const todos = getTodos();
    expect(todos.length).toBeGreaterThan(-1);
  });

  it("should delete a todo", () => {
    const task = "Test delete function";
    const todo = addTodo(task);
    expect(getTodos()).toContainEqual(todo);
    deleteTodo(todo.id);
    expect(getTodos()).not.toContainEqual(todo);
  });
});

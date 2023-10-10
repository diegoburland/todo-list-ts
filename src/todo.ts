interface Todo {
  id: number;
  task: string;
}

let todos: Todo[] = [];

export const addTodo = (task: string): Todo => {
  const newTodo: Todo = {
    id: Date.now(),
    task,
  };

  todos.push(newTodo);
  return newTodo;
};

export const getTodos = (): Todo[] => {
  return todos;
};

export const deleteTodo = (id: number): void => {
  todos = todos.filter((todo) => todo.id !== id);
};

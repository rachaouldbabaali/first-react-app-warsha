import { useState } from "react";

function TodoList() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Learn JavaScript", completed: false },
  ]);

  const addTodo = () => {
    if (input.trim()) {
      setTodos([
        ...todos,
        { id: todos.length + 1, text: input, completed: false },
      ]);
      setInput("");
    }
  };

  const removeTodo = (id) => {
    console.log(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const removeAllTodo = () => {
    setTodos([]);
  };

  return (
    <>
      <h1>Todo List Component</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo </button>
        <button onClick={removeAllTodo}>Remove all todos</button>

        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => removeTodo(todo.id)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default TodoList;

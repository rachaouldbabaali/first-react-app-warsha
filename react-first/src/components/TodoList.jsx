import { useState } from "react";

function TodoList() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Learn JavaScript", completed: false },
  ]);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

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

  const startEdit = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = () => {
    if (editText.trim()) {
      setTodos(
        todos.map((todo) =>
          todo.id === editingId ? { ...todo, text: editText.trim() } : todo
        )
      );
      setEditText("");
      setEditingId(null);
    }
  };
  const cancelEdit = () => {
    setEditText("");
    setEditingId(null);
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
              {editingId === todo.id ? (
                <div>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    autoFocus
                  />
                  <button onClick={() => saveEdit(todo.id)}>Save</button>
                  <button onClick={cancelEdit}>Cancel</button>
                </div>
              ) : (
                /* view mode */
                <div>
                  {todo.text}
                  <button onClick={() => startEdit(todo)}>Edit</button>
                  <button onClick={() => removeTodo(todo.id)}>X</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default TodoList;

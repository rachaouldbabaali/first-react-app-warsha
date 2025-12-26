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
    <div className="container mt5">
      <h1 className="text-center mb-4">Todo List Component</h1>
      <div className="input-group mb-4">
        <input
          type="text"
          className="form-cpntrol"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
        />
        <button className="btn btn-primary" onClick={addTodo}>
          Add Todo{" "}
        </button>
        <button className="btn btn-warning" onClick={removeAllTodo}>
          Remove all todos
        </button>
      </div>

      <div className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            {editingId === todo.id ? (
              <div className="d-flex gap-2">
                <input
                  type="text"
                  className="form-control"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  autoFocus
                />
                <button
                  className="btn btn-success"
                  onClick={() => saveEdit(todo.id)}
                >
                  Save
                </button>
                <button className="btn btn-secondary" onClick={cancelEdit}>
                  Cancel
                </button>
              </div>
            ) : (
              /* view mode */
              <div className="d-flex justify-content-between align-items-center">
                {todo.text}
                <div>
                  <button
                    className="btn btn-sm btn-outline-primary me-2"
                    onClick={() => startEdit(todo)}
                  >
                    
                    <i className="bi bi-pencil"></i>
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger me-2"
                    onClick={() => removeTodo(todo.id)}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </div>
    </div>
  );
}
export default TodoList;

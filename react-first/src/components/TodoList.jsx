import { useState } from "react";

function TodoList() {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([
        "default todo 1",
    ]);

    const addTodo = () => {
        if (input.trim() ) {
            setTodos([...todos, input]);
            setInput("");
        }
        
    };

    return <>
        <h1>Todo List Component</h1>
        <div>
            <input type="text" value={input} onChange={e => setInput(e.target.value)} />
            <button onClick={addTodo}>Add Todo </button>

            <ul>
                {todos.map((todo , index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    </>
}
export default TodoList;
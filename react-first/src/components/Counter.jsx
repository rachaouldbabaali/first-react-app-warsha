import {  useState } from "react";
function Counter() {
    const [count, setCount] = useState(0);

    console.log(count);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
        console.log(count);
    }
    return (
        <div>
            <button onClick={decrement}>Decrement</button>
            <h1>Counter {count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    );
}
export default Counter;
import { useState } from "react";

function counter() {
    // let count = 0;

    

    // useState returns an array with two elements
    // useState is a Hook that lets you add React state to function components
    // const arr = useState(15);  // 5 is the initial value
    // const count = arr[0]; // variable
    // const setCount = arr[1]; // function to update variable

    const [count, setCount] = useState(12);
    function increment() {
        // count = count + 1; // This won't work, because count is immutable
         setCount(count + 1);  // count= count + 1
    }
    function decrement() {
        setCount(count - 1);
    }

    return (
        <div>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>
            <h1>Counter: {count}</h1>
        </div>
    );
}

export default counter;
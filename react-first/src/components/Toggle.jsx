import { useState } from "react";

function Toggle() {
    const [state, setState] = useState(false);
    const switchStatus = () => {
        setState(!state);
    }
    return <>
        <h1>State : {state ? "On" : "Off" }</h1>
        <button onClick={switchStatus}>Toggle</button>
    </>
    
}

export default Toggle;
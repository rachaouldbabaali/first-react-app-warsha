import { useState } from "react";
function Form() {
    const [name, setName] = useState("");
    const [submitedName, setSubmitedName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
        console.log(name);
    }
    const handelSubmit = (e) => {
        e.preventDefault();
        setSubmitedName(name);
        setName("");
    }
    return <>
        <h1>Form Component</h1>
        <form onSubmit={handelSubmit}>
            <input value={name} onChange={handleChange} placeholder="enter your name"/>
            <button type="submit">Submit</button>
        </form>
        <p>Hello {submitedName}</p>
    </>
}
export default Form;
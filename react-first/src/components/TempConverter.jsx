import {useState } from "react";

function TempConverter() {
    const [celsius, setCelsius] = useState(0);
    const [fahrenheit, setFahrenheit] = useState(32);

    const handleCelsiusChange = (value) => {
        setCelsius(value);
        const fTemp = (value * 9/5) + 32;
        setFahrenheit(fTemp);
    }
    return <>
        <label>Celsius :</label>
        <input type="number" value={celsius} onChange={(e) => handleCelsiusChange(e.target.value)} /> Celsius
        <label>Fehrenheit :</label>
        <input type="number" value={fahrenheit}  /> Fahrenheit
    </>
}
export default TempConverter;
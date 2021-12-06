import {useState} from "react";
import "./Button.css"
const Button = () => {
const [counter, setCounter] = useState(0)

const setDecrease = () => {
    setCounter(counter - 1)
    
}
const setIncrease = () => {
    setCounter(counter + 1)
}
    return (
        <div>
            <p id="count">{counter}</p>
            <button id="dec" onClick={setDecrease}>Decrease</button>
            <button id="inc" onClick={setIncrease}>Increase</button>

        </div>
    )
}
export default Button;
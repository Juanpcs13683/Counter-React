import React from "react"
const Buttons = ({ plusOne, minusOne, resetCounter }) => (
    <div>
        <button className="plus" onClick={plusOne}>+</button>
        <button className="minus" onClick={minusOne}>-</button>
        <button className="reset" onClick={resetCounter}>Reset</button>
    </div>
)


export default Buttons
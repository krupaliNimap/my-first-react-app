import React, { useState } from "react";

const CounterExample = () =>{
    const [counter, setCounter] = useState(90)
    const handleChange = () =>{
        setCounter(counter+5)
    }
    return(
        <>
        <p>{counter}</p>
        <button onClick={handleChange}>Increase by 5</button>
        </>
    )
    
};

export default CounterExample
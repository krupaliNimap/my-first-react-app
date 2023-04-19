import React, { useState } from "react";
const TextExample = () =>{
    const [Text, setText] = useState("Hello")
    const handleText = event => {
        setText(event.target.value)
    }
    return (
        <>
        <p>{Text}</p>
        <input type='text' onChange={handleText} value = {Text}></input>
        </>
    )
}

export default TextExample
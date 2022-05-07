import React from "react";
function FunctionClick (){
    function handleClick(){
        console.log("function button Clicked")
    }
    return (
        <div>
            <button onClick={handleClick} >Click me FunctionClick</button>
        </div>
    )
}

export default FunctionClick
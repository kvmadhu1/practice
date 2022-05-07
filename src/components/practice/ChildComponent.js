import React from "react"

function ChildComponent (props){
    return(
        <div>
            {/* <button onClick={props.greet} >greetParent</button> */}
            <button onClick={()=>{props.greet("child")}} >greetParent</button>
        </div>
    )
}
export default ChildComponent
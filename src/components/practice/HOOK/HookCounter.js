import React,{useState} from "react";
function HookCounter(){
    const [count,seCount] = useState(0)
    return(
        <div>
            <button onClick={()=>seCount(count + 1)} >Count {count}</button>

        </div>
    )
}
export default HookCounter 
import React from "react"

function Greet (props){
    const {name, heroname} = props
    return (
                <div>
           <h1>
           hello madhu k v {name} and {heroname}
            </h1> 
            
        </div>
    )
}
export default Greet
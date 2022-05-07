import React, { Component } from "react"

class Welcome extends Component{
    render(){
        const {name,hello} = this.props
        return (
            <div>
                <h1> Hello class component {name} and {hello} </h1>
            
            </div>
            
        )
    }
}
export default Welcome
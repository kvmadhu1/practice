import React, { Component } from "react";
class Message extends Component{
    constructor(){
        super()
        this.state = {
            message: " this is state"
        }
    }


    clcikHandle(){
        this.setState({
            message: "state has changed"
        })
    }

    render(){
        return(
            <div>
                <h1>
                    {this.state.message}
                    
                </h1>
                <button onClick={ () =>{ this.clcikHandle() } } >click to change state</button>
            </div>
        )
    }
}

export default Message
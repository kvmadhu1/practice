import React, { Component } from "react";

class Counter extends Component{
     constructor(){
         super()
         this.state = {
             count: 0
         }
     }
incrementOne(){
    // this.setState({
    //     count: this.state.count + 1
    // },()=>{console.log("callback func:", this.state.count)})

    this.setState((prevState)=>({
        count: prevState.count + 1
    }))

    console.log(this.state.count)
}

incrementFive(){
    this.incrementOne()
    this.incrementOne()
    this.incrementOne()
    this.incrementOne()
    this.incrementOne()
}

    render(){
        return(
            <div>
                <h1>Counter : {this.state.count} </h1>
                <button onClick={() => {this.incrementFive()}}>increment</button>
            </div>
        )
    }
}

export default Counter
import React, { Component } from "react";

class ClassCounterOne extends Component{
    constructor(){
        super();
        this.state = {
            count: 0,
            name: ''

        }
    }

    componentDidMount(){
        document.title = `clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.count !== this.state.count){
            console.log('component updating')
            document.title = `Clicked ${this.state.count} times`
        }
       
    }

    render(){
        return(
            <div>
                <input type='text' value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}} />
                <button onClick={() => this.setState({count:this.state.count + 1})} >click{this.state.count}</button>
            </div>

        )
    }
}
export default ClassCounterOne
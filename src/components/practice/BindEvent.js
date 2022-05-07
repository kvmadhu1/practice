import React, {Component} from "react";

class BindEvent extends Component{
    constructor (){
        super()
        this.state = {
            message: "Hello"
        }

        // this.handleClick = this.handleClick.bind(this)
    }

    // handleClick(){
    //     this.setState({
    //         message: "goodBye"
    //     })
    //     console.log(this)
    // }

    handleClick = () => {
        this.setState({
            message: "good bye madhu"
        })
    }

    render(){
        return (
            <div>
                <div> {this.state.message} </div>
                {/* <button onClick={this.handleClick.bind(this)} >click</button> */}
                {/* <button onClick={()=>this.handleClick()} >click</button> */}
                {/* <button onClick={this.handleClick} >click</button> */}
                <button onClick={this.handleClick} >click</button>
            </div>
        )
    }
}

export default BindEvent
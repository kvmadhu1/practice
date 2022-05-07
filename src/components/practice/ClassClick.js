import React,{Component} from "react";

class ClassClick extends Component{

    handleClick (){
        console.log('button Clicked')
    }

    render(){
       
        return(
            <div>
                <button onClick={this.handleClick} >class button</button>
            </div>
        )
    }
}
export default ClassClick
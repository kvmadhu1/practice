import React, { Component } from "react";

class Form extends Component{
    constructor(props){
        super(props)
        this.state ={
            name : '',
            comment: '',
            topic:'3'
        }
    }

    handleChange = (event)=>{
        this.setState({
            name: event.target.value
        })      
    }
    handleComment = (event)=>{
        this.setState({
            comment: event.target.value
        })

    }
   handleTopic = (event)=>{
       this.setState({
           topic: event.target.value
       })
   }

   handleSubmit = (event) =>{
       alert(`${this.state.name} ${this.state.comment} ${this.state.topic}`)
       event.preventDefault()
   }
    
    render(){
       const {name,comment,topic} = this.state
        return(
            <form onSubmit={this.handleSubmit}>
                <div>                
                <label>name:</label>
                <input type='text' value={name} onChange={this.handleChange} />
                </div>
                <div>
                    <label>comment:</label>
                    <textarea value={comment} onChange={this.handleComment} />
                </div>

                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.handleTopic} >
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                    </select>
                </div>
                <button type="submit">submit</button>
            </form>
        )
    }
}

export default Form



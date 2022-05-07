import React, { Component } from 'react'

export class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username : '',
         comments : '',
         topic : 'react'
      }
    }
handleUserNameChange= (event) => {
    this.setState({
        username : event.target.value
    })
}
handleCommentChange = (event) => {
    this.setState({
        comments: event.target.value
    })
}

handleChangeTopic = (event) => {
    this.setState({
        topic: event.target.value
    })
}
handleSubmit = event => {
    
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    event.preventDefault()
}

  render() {
      const{ username,comments,topic} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
          <div>
              <label>User Name</label>
              <input type="text" value={username} onChange={this.handleUserNameChange} />
          </div>
          <div>
              <label>comments</label>
              <textarea value={comments} onChange={this.handleCommentChange} ></textarea>
          </div>

          <div>
              <label>Select</label>
              <select value={topic} onChange={this.handleChangeTopic}>
                  <option value='react'>react</option>
                  <option value = 'angular'>angualr</option>
                  <option value='vue'>vue</option>
              </select>
          </div>
          <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form
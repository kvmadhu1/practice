import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }
    increment = () =>{
        this.setState({
            count : this.state.count + 1
        })
    }
  render() {
      const {count} = this.state
    return (
      <div>ClassCounter
          <button onClick={this.increment}>Counter: {count}</button>
      </div>
    )
  }
}

export default ClassCounter
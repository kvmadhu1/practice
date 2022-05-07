import React, { Component } from 'react'

class ClassCounterOne extends Component {
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }

componentDidMount(){
    document.title = `clicked ${this.state.count} times`
}    
componentDidUpdate(prevProps,prevState){
    document.title = `clicked ${this.state.count} times`
}
  render() {
    return (
      <div>
          <button onClick={() => this.setState({count:this.state.count + 1})} > {this.state.count} times clicked </button>
      </div>
    )
  }
}

export default ClassCounterOne
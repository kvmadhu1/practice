import React, { Component } from 'react'
import FRInput from './FRInput'

class FRParentInput extends Component {
    constructor(props){
        super(props)
        this.componentRef = React.createRef()
    }

clickHandler = () =>{
    this.componentRef.current.focus()
}

  render() {
    return (
      <div>
          <FRInput ref={this.componentRef}  />
          <button onClick={this.clickHandler}>Focus input</button>
      </div>
    )
  }
}

export default FRParentInput
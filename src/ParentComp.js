import React, { Component } from 'react'
import PureComp from './components/practice/PureComp'
import MemoComp from './MemoComp'
import RegComp from './RegComp'

class ParentComp extends Component {
    constructor(){
        super()
        this.state ={
            name: 'madhu'
        }
    }

componentDidMount(){
    setInterval(()=>{
        this.setState({
            name: 'madhu'
        })
    },3000)
}

   
  render() {
      console.log('*********Parent comp render*************')
    return (
      <div>ParentComp
<MemoComp name={this.state.name} />

          {/* <RegComp name={this.state.name} />
          <PureComp name={this.state.name} /> */}
      </div>
    )
  }
}

export default ParentComp 
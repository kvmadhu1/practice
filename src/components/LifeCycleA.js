import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

export class LifeCycleA extends Component {
constructor(props) {
  super(props)

  this.state = {
     name: 'madhu'
  }
  console.log('LifecycleA constructor')
}
static getDerivedStateFromProps(props,state){

    console.log('LifecycleA getDerivedStateFromProps')
    return null
}

componentDidMount(){
    console.log('LifecycleA componentDidMount')
}

shouldComponentUpdate(){
    console.log('LifecycleA shouldComponentUpdate')
    return true
}

getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('lifeCycleA getSnapShotBeforeUpdate')
    return null
}

componentDidUpdate(){
    console.log('lifecycleA componentDidUpdate')
}


changeState = () => {
    this.setState({
        name: 'kv'
    })
}

  render() {
    console.log('LifecycleA render')
    return (  
        <div>     
      <div>LifeCycle A </div>
      <button onClick={this.changeState} >Change state</button>
      <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycleA
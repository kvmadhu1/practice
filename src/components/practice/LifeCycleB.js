import React, { Component } from "react";

class LifeCycleB extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'madhu'
        }
        console.log('LifeCycleB constructor')
    }

    static getDerivesStateFromProps(){
        console.log('LifeCycleB getDerivedStateFromProps')
    }

    componentDidMount(){
        console.log('LifeCycleB componentDidMount')
    }


shouldComponentUpdate(){
    console.log('LifeCycleB shouldComponentUpdate')
    return true
}

getSnapshotBeforeUpdate(){
    console.log('LifeCycleB getSnapshotBeforeUpdate')
    return null

}

componentDidUpdate(){
    console.log('LifeCycleB componentDidUpdate')
}

    render(){
        console.log('LifeCycleB render')
        return (
            <div>
                LifeCycleB
            </div>
        )
    }
}
export default LifeCycleB
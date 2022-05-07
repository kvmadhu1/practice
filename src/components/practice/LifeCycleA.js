import React,{Component} from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: "madhu"
        }
        console.log('LifeCycleA constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA getDervidSateFromProps ')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleA componentDidMount')
    }



    shouldComponentUpdate(){
        console.log('LifeCycleA should ShouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,PrevState){
        console.log('LifeCycleA getSnapshotBeofreUpdate')
        return null
    }
    componentDidUpdate(prevProps,PrevState,snapshot){

        console.log('LifeCycleA componentDidUpdate')
    }
        
    changeState = () =>{
        this.setState({
            name: 'kv'
        })
    }

    render(){
        console.log('LifeCycleA render')
        return(
            <div>
                LifeCycleA
                <button onClick={this.changeState}>click</button>
                <LifeCycleB />
                
            </div>
        ) 
    }
}
export default LifeCycleA
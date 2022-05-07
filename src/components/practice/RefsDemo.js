import React,{Component} from "react"
class RefsDemo extends Component {
    constructor(props){
        super(props)
        this.inputRef = React.createRef()
    }
componentDidMount(){
    this.inputRef.current.focus()
    console.log(this.inputRef)
}

render(){
    return(
        <div>
            <input ref={this.inputRef} />
        </div>
    )
}
    
}

export default RefsDemo
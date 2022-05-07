import React, { Component } from "react";
class UserGreeting extends Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn : true
        }
    }



    render(){

        return this.state.isLoggedIn && <div>welcome mad</div>


        // return this.state.isLoggedIn ? (
        //     <div>welcome madhu</div>
        // ) : (
        // <div>welcome guest</div>
        // )

        // let message;
        // if(this.state.isLoggedIn){
        //      message = <div>welcome madhu</div>
        // }
        // else{
        //     message = <div>welcoem guest</div>
        // }

        // return (
        //     <div>{message}</div>
        // )



        // if(this.state.isLoggedIn){
        //     return(
        //         <div>
        //             Welcome madhu
        //         </div>
        //     )
        // }
        // else{
        //     return(
        //         <div>
        //             welcome guest
        //         </div>
        //     )
        // }
        // return(
        //     <div>
        //         weclocme madhu
        //     </div>
        // )
    }
}

export default UserGreeting
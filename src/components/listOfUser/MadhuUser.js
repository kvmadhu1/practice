import React, { Component } from "react";


export default class MadhuUser extends Component{
    constructor(props){
        super(props);
        this.state={
            userData:[],
        }
    }

    getuserData = async () => {
        const response = await fetch ("https://jsonplaceholder.typicode.com/users")
        const data = await response.json();
        console.log(data);
        this.setState({
            userData: data
        })
    }

    componentDidMount(){
        this.getuserData();
    }

    render(){
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>username</td>
                            <td>city</td>
                            <td>phone</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.userData.length > 0 && this.state.userData.map((user) => (
                            <tr key = {user.id} >
                                <td> {user.id} </td>
                                <td> {user.username} </td>
                                <td> {user?.address?.city} </td>
                                <td> {user.phone} </td>
                            </tr>

                        ) )}
                    </tbody>
                </table>
            </div>
        )
        
    }
}
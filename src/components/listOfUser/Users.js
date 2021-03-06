import React, { Component } from "react";

export default class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usersData: [],
    };
  }

 

  getUsersData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    this.setState({ usersData: data });
  };

  componentDidMount() {
    this.getUsersData();
  }

  render() {
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <td><b>Id</b></td>
              <td><strong>username</strong></td>
              <td><strong>City</strong></td>
              <td><strong>Phone</strong></td>
            </tr>
          </thead>
          <tbody>
            {this.state.usersData.length > 0 &&
              this.state.usersData.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user?.address?.city}</td>
                  <td>{user.phone}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}
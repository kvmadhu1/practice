import axios from 'axios'
import React, { Component } from 'react'

class PostList extends Component {
    constructor(){
        super()
        this.state ={
            posts : [],
            errorMsg : ''
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMsg:'Error retrreving data'})
        })
    }

  render() {
      const {posts,errorMsg} = this.state
    return (
      <div>
          PostList
          {
              posts.length ?
              posts.map(post => <div key={post.id}>{post.title}</div>) :
              null
          }
          {
              errorMsg ? <div>{errorMsg}</div> : null
          }


      </div>
    )
  }
}

export default PostList
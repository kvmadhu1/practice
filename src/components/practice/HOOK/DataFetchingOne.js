import React, {useState,useEffect} from 'react'
import axios from 'axios'


function DataFetchingOne() {
    const [loading,setLoading] = useState(true)
    const[error,setError] = useState('')
    const[post,setPost] = useState({})

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(respoonse => {
            setLoading(false)
            setError('')
            setPost(respoonse.data)
        })
        .catch(error => {
            setLoading(false)
            setError('something went wrong')
            setPost({})
        })

    }, [])
  return (
    <div>DataFetchingOne
        <div>
            {loading ? 'Loading' : post.title}
            {error ? error : null}
        </div>
    </div>
  )
}

export default DataFetchingOne
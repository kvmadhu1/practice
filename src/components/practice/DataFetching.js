import axios from "axios";
import React, { useEffect, useState } from "react";
function DataFetching (){
    const[posts, setPosts] = useState({})
    const[id,setId] = useState(1)
    const[idFromButtonClick,setIdFromButtonClick]= useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res =>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[idFromButtonClick])

const handlClick = ()=>{
    setIdFromButtonClick(id)
}
    return(
        <div>
            <input type='text' value={id} onChange={e => setId(e.target.value)}  />
            <button type="button" onClick={handlClick} >fetch post</button>
         <div>{posts.title}</div>

         {/* <ul>
             {
                 posts.map(post => <li key={post.id}>{post.title}</li>)
             }
            
         </ul> */}
        </div>

    )
}

export default DataFetching
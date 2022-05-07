import React, { useEffect, useState } from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        document.title = `you clicked ${count} times`
    })

  return (
    <div>
        <button onClick={()=>{ return setCount(count + 1)}}>{count} times</button>
    </div>
  )
}

export default HookCounterOne

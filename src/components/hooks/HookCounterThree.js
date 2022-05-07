import React, { useState } from 'react'

function HookCounterThree() {

const [name,setname] = useState({firstName:"",lastName:""})

  return (
    <div>
        <form>
        <input type='text' value={name.firstName} onChange={e => setname({...name, firstName:e.target.value})}  />
        <input type='text' value={name.lastName} onChange ={e => setname({...name, lastName: e.target.value})} />
        <h2>your first name is :{name.firstName}</h2>
        <h2>your last name is : {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
        </form>

    </div>
  )
}

export default HookCounterThree
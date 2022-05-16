import React from 'react'


const initialState = 0;
const reducer = (state, action)=> {
  switch(action){
    case 'increment':
     return state + 1;
     case 'decrement':
       return state - 1;
       case 'reset' :
         return initialState;
         default :return state
  }
}
function CounterOne() {
<<<<<<< HEAD
 const [count, dispatch] = useReducer(reducer,initialState)
=======
    
>>>>>>> 4daded4737933190f9ec4a3081d569794a7ed853

  return (
    
    <div>
      <div> {count} </div>
        <button onClick={()=> dispatch('increment') }>Increment</button>
        <button onClick={()=>dispatch('decrement')}>Decrement</button>
        <button onClick={()=>dispatch('reset')} >Reset</button>
        
    </div>
  )
}

export default CounterOne
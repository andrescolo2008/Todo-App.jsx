import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {
  
    const {counter,increment,shrink,restart}=useCounter();
    
  
    return (
    <>
    <h1> Counter with Hook : {counter}  </h1>
       
     <hr />     
     
<button  onClick={()=> increment(1)} className='btn-primary-button'>+1</button>

<button onClick={restart} className='btn-primary-button'>reset</button>

<button onClick={()=>shrink(1)} className='btn-primary-button'>-1</button>

     </>

  )
}


// ()=>setCounter({ counter}+1
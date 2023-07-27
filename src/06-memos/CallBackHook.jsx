import { useState } from "react"
import { ShowIncrement } from "./ShowIncrement"
import { useCallback } from "react"

export const CallBackHook = () => {

    
    const [ counter, setCounter]= useState( 10)
   
    const incrementFather=  useCallback(
     (value) => {
        setCounter((c)=> c + value   )
     },
     [],
   )
   

    // const incrementFather= ()=>{
    //     setCounter(counter+1 );
    // }
    return (
        <>
    
<h1>useCallBack Hook {counter}</h1>
<hr />
<ShowIncrement increment={incrementFather} />

    </>
  )
}

import { useState } from "react"


  export const useCounter = (initialValue =0 ) => {

    const [counter,setCounter]= useState(initialValue)

    const increment= ( value= 1) =>{
        setCounter(counter + value);
    }

    const shrink= (value=1 ) =>{

        if( counter<1) return;

        setCounter(counter -value);
    }

    const restart= ( ) =>{
        setCounter(initialValue);
    }



  return {

counter,
increment,
shrink,
restart,

  }
    
}

import React, { useLayoutEffect,useRef,useState } from 'react'

export const QuoteAuthor = ({author,quote}) => {

  const pRef = useRef();
  const [ boxSize , setBoxSize]= useState({width:0,height:0})


  useLayoutEffect(() => {
    
  
      const {height,width}= pRef.current.getBoundingClientRect();// current indica el valor actual 
      setBoxSize({height,width});
    
  }, [quote])
  
  return (

    <>  
    <blockquote 
    className='blockquote text-right'
    style={{display:'flex' ,backgroundColor:'greenyellow'}}
    >
    <p ref={pRef} className='mb-1'> {quote}</p>
    <footer className='blockquote-footer'> {author} </footer>
    </blockquote>

<code>{JSON.stringify(boxSize)}</code>

    </>
    
  )
}

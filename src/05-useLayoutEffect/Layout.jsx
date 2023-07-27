import React from 'react'
// import { useFetch } from '../hooks/useFetch'
// import { useCounter } from '../hooks/useCounter'
import { useCounter,useFetch } from '../hooks'
import { LoadingQuote, QuoteAuthor } from '../03-examples/'


export const Layout = () => {
  
  
      const {counter,increment,shrink}=useCounter(1)
 
    const {data,isLoading,hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
  
console.log({counter,data,isLoading,hasError});
 const {author,quote}=!!data && data[0]


    return (
    <>
    <h1>Breaking bad quotes </h1>
    <h2>{counter} </h2>

    <hr />
{
  isLoading 
  ? < LoadingQuote /> 
  :< QuoteAuthor author={author} quote={quote} />
}

  
 <button 
 onClick={ ()=> increment()}
 disabled={isLoading}
  className='btn-quote' >
     Next quote 
 </button>

 <button
  onClick={ ()=> shrink()}
  disabled={isLoading}
   className='btn-quote2' >
     Before Quote 
 </button>

    </>
  )
}

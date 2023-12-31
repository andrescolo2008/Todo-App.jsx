import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [ formState, setForm]= useState({ 
        username:'andres',
        email:'andres.correa@gmail.com',
    })

const { username,email}= formState;

const  onInputChange= ({target} ) =>{
    const {name,value}=target;
    setForm({
        ...formState,
        [name]:value
    })
 
    
}

useEffect(  ()=>{
    // console.log('user name  changed!!!');
},[username]);

useEffect(  ()=>{
    // console.log('email changed!!!');
},[email]);

return (
   <>
    <h1>Formulario Simple  </h1>
    <hr />
<input

type="text" 
className='form-control'
placeholder='Username'
name='username'
value={username}
onChange={onInputChange}
/>

<input

type="email" 
className='form-control mt-2'
placeholder='andres.correa@gmail.com'
name='email'
value={email}
onChange={onInputChange}

/>
{
     (username === 'andres1')&& <Message />
}
   </>
  )
}

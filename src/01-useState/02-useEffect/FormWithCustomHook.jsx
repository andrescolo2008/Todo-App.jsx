import React, { useState } from 'react'
import { useForms } from '../../hooks/useForms';

export const FormWithCustomHook = () => {

const {formState,onInputChange,onReset,username,email,password}=useForms({
    
        username:'',
        email:'',
        password:'password'
    
});

// const {username,email,password}=formState

return (
   <>
    <h1>Formulario con Custom Hook  </h1>
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
placeholder='email'
name='email'
value={email}
onChange={onInputChange}

/>

<input

type="password" 
className='form-control mt-2'
placeholder='Contraseña'
name='password'
value={password}
onChange={onInputChange}

/>
<button onClick ={onReset} className='btn btn-primary mt-2'>borrar</button>
 {/* onClick ={onReset} */}
   </>
  )
}

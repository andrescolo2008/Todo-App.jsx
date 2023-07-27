import React from 'react'
import { useForms } from '../hooks/useForms'

export const TodoAdd = ({onNewTodo}) => {
  
 const {description ,onInputChange,onReset} = useForms({

    description:''
 });

const onForSubmit=(event)=>{
event.preventDefault();
if(description.length<= 1) return;

const newTodo={
    id:new Date().getTime(),
    description,
    done:false,
    }
     onNewTodo(newTodo)
     onReset();
}

    return (
    /* TodoAdd onNewTodo(todo) emite el nuevo todo  */
/* id:newDate()....,decription :'' , done:false */

<form onSubmit={onForSubmit}>
<input 
   type="text"
   placeholder="Qué  hay que hacer ???"
 className="form-control" 
 name="description"
 value={description}
 onChange={onInputChange}
/>
  <button
      type="submit"
      className="btn btn-outline-primary mt-4"
    >
        Agregar
       </button>
</form>
  )
}

import { useState } from "react";

export const useForms = (initialForm = {})=> {
 
    const [ formState, setForm]= useState(initialForm)

const  onInputChange= ({target} ) =>{
    const {name,value}=target;
    setForm({
        ...formState,
        [name]:value
    })
}

const  onReset= ({target} ) =>{
    const {name,value}=target;
    setForm(initialForm)
}

    return {
        ...formState,
formState,
onInputChange,
onReset
    }

  }




    // username:'',
    // email:'',
    // password:'password'

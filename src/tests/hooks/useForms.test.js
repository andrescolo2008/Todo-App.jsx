import { act, renderHook } from "@testing-library/react"
import { useForms } from "../../hooks/useForms"

describe('pruebas en < Pruebas en useForms >',()=>{
    const initialForm={
        name:'fernando',
        email:'fernando@gmail.com'
    }
test('debe regresar los valores por defecto', () => { 

    const {result}= renderHook(()=>useForms(initialForm))
expect(result.current).toEqual({ 
    name: initialForm.name,
    email: initialForm.email,
    formState: initialForm,
    onInputChange: expect.any(Function),
    onReset:expect.any(Function)
     })    

   })
   test('debe de cambiar el nombre del formulario ', () => { 
const newValue='Juan';

const {result}= renderHook(()=>useForms(initialForm))
const{onInputChange}=result.current
act(() =>{

    onInputChange({target:{name:'name',value:newValue} })
})
expect(result.current.name).toBe(newValue)
expect(result.current.formState.name).toBe(newValue)
//expect, result.current.formsTate.name=== Juan

   })

   test('debe de resetear el formulario  ', () => { 
    const newValue='Juan';
    
    const {result}= renderHook(()=>useForms(initialForm))
    const{onInputChange,onReset}=result.current
    act(() =>{
    
        onInputChange({target:{name:'name',value:newValue} })
        onReset()
    })
    expect(result.current.name).toBe(initialForm.name)
    expect(result.current.formState.name).toBe(initialForm.name)
    //expect, result.current.formsTate.name=== Juan
    
       })

})
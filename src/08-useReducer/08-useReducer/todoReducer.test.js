import { screen } from "@testing-library/react"
import { todoReducer } from "../todoReducer"

describe('pruebas en Todo Reducer >',()=>{

const initialState=[{
    id:1,
    description:'Demo Todo',
    done:false
}]
    test('Debe de regresar el estado inicial ', () => { 
const newState=todoReducer(initialState,{})
expect(newState).toBe(initialState);
     })



     test('Debe de agregar un todo ', () => { 
        const action ={
            type:'[TODO] Add Todo',
            payload:{
                 id:2,
                 description:'nuevo todo',
                 done:false
            }
        }
        const newState=todoReducer(initialState,action)
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
        })

        test('Debe de eliminar un todo ', () => { 
            const action ={
                type:'[TODO] Add Todo',
                payload:{
                     id:2,
                     description:'nuevo todo',
                     done:false
                }
            }
            const newState=todoReducer(initialState,action)
            expect(newState.length).toBe(2);
            expect(newState).toContain(action.payload);
            })

            test('Debe de realizar el toggle de un todo ', () => { 
                const action ={
                    type:'[TODO] Add Todo',
                    payload:{
                         id:2,
                         description:'nuevo todo',
                         done:false
                    }
                }
                const newState=todoReducer(initialState,action)
                expect(newState.length).toBe(2);
                expect(newState).toContain(action.payload);
                })

})
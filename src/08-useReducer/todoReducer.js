export const todoReducer=( initialState,action)=>{

    switch(action.type){
        case'[TODO] Add Todo':
return [...initialState,action.payload] // retornar un nuevo state , bien sea : string, arreglo, booleano, objeto 
case'[TODO] Remove Todo':
return initialState.filter(todo=> todo.id !== action.payload)


        default:
        return initialState
    
    }
}
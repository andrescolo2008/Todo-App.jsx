export const todoReducer=( initialState,action)=>{

    switch(action.type){
        case'[TODO] Add Todo':
return [...initialState,action.payload] // retornar un nuevo state , bien sea : string, arreglo, booleano, objeto 


        default:
        return initialState
    
    }
}
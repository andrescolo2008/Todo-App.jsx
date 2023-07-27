export const todoReducer=( initialState,action)=>{

    switch(action.type){
        case'[TODO] Add Todo':
return [...initialState,action.payload] // retornar un nuevo state , bien sea : string, arreglo, booleano, objeto 

case'[TODO] Remove Todo':
return initialState.filter(todo=> todo.id !== action.payload)

case'[TODO] Toggle Todo':
return initialState.map( todo=>{

 if(todo.id === action.payload){
   return { ...todo,
    done:!todo.done
             }// va a realizar la función con cada elemento del arreglo 
   }
    return todo;
});
        default:
        return initialState
    }
}
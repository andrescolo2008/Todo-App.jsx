 const initialState=[{
    id:1,
    todo:'recolectar la piedra del alma',
    isDone:false,
 }];

 const todoReducer= (state=initialState,action={} ) =>{


    if (action.type ==='[TODO] add todo'){
        return [...state,action.payload]
    }
    return state;
 }

 let todos= todoReducer();

 console.log(todos);

 const newTodo={
    id:2,
    todo:'recolectar la piedra del poder',
    isDone:false,
 }
 
const addTodoAction={
    type:'[TODO] add todo',
    payload:newTodo,
}

 todos = todoReducer(todos,addTodoAction );

 console.log({state: todos});
 
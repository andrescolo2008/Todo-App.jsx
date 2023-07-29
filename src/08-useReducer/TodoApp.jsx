import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"

const initialState= []

const init= ()=>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
// crear un componente que se llame useTodos
// todos,handledeleteTodo,handleNewTodo,handleToggleTodo
//const [todos,handledeleteTodo,handleNewTodo,handleToggleTodo]=useTodo(), que esto maneje  todo esto  useEffect y todos

    const [todos, dispatch] = useReducer(todoReducer, initialState,init)
 
useEffect(() => {
localStorage.setItem('todos',JSON.stringify(todos))  
}, [todos])


    const handleNewTodo=(todo)=>{
      const action={
        type:'[TODO] Add Todo',
        payload:todo
      }
      dispatch(action);
    }
      const handleDeleteTodo=(id)=>{
        dispatch({
          type:'[TODO] Remove Todo',
          payload:id
        })
    }

    const handleToggleTodo=(id)=>{

       dispatch({
       type:'[TODO] Toggle Todo',
        payload:id
       })
    }
 
    return (
    <>
    <h1> TodoApp :2 , <small> pendientes :2 </small></h1>
    <hr />

    <div className="row">
       <div className="col-7">
           < TodoList 
              todos={todos}
               onDeleteTodo={handleDeleteTodo}
               onToggleTodo={handleToggleTodo}
            />
   
       </div>
       <div className="col-5">
        <h4> Agregar TODO</h4>
        <hr />
             <TodoAdd 
             onNewTodo={handleNewTodo} />
        </div>
   </div>

    </>
  )

}



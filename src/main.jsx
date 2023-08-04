import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Padre } from './07-tarea-memo/Padre'
// import HooksApp from './HooksApp'
// import CounterApp from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { FormWithCustomHook } from './01-useState/02-useEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-memos/Memorize'
// import { MemoHook } from './06-memos/MemoHook'
// import { CallBackHook } from './06-memos/CallBackHook'
//  import  './08-useReducer/intro-reducer';
import { MainApp } from './09-useContext/MainApp';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
} from "react-router-dom";
// import { TodoApp } from './08-useReducer/TodoApp';




ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
  
  < MainApp />

  </BrowserRouter>
   
  // <React.StrictMode>
  // </React.StrictMode>,
)

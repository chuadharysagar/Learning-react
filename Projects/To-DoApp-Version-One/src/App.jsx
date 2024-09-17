// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Appname from "./components/Appname"
import AddToDo from "./components/AddTodo"
import ToDoitem1 from "./components/ToDoitem1"
import ToDoitem2 from "./components/ToDoitem2"
import "./App.css"

function App() {


  return <center className="todo-container">
    <Appname></Appname>
    <AddToDo></AddToDo>
    <ToDoitem1></ToDoitem1>
    <ToDoitem2></ToDoitem2>
        
  </center>
}

export default App

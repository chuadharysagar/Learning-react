// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Appname from "./components/Appname"
import AddToDo from "./components/AddTodo"
import TodoItems from "./components/Todoitems"
import "./App.css"
import { useState } from "react"
import WelcomeMsg from "./components/Welcomemessage"

function App() {

  const [todoitems, setTodoitems] = useState([]);

  const handleAddnewItem = (addnewTask, dueDate) => {
    console.log(`The new task ${addnewTask} Date:${dueDate}`);
    // const newTodoitem = [...todoitems, {
    //   name: addnewTask,
    //   dueDate: dueDate
    // }]
    
    //Rather than spreading the array it is good practice to apply the functional way to set the items
    // Functional Updates
    setTodoitems((currValue)=>[
       ...currValue, {
        name: addnewTask,
        dueDate: dueDate
      }]
    );
  }

  const handleDeleteitem =(todoitemName)=>{
    const newTodoItems = todoitems.filter((item)=> item.name !== todoitemName);
    setTodoitems(newTodoItems);
    console.log(`Deleted item is ${todoitemName}`);
  }


  return <center className="todo-container">
    <Appname></Appname>
    <AddToDo onNewitem={handleAddnewItem}></AddToDo>
    {todoitems.length===0 && <WelcomeMsg></WelcomeMsg>}
    <TodoItems todoitems={todoitems} onDelete={handleDeleteitem}></TodoItems>
  </center>
}

export default App

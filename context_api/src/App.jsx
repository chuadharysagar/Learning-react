// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Appname from "./components/Appname"
import AddToDo from "./components/AddTodo"
import TodoItems from "./components/Todoitems"
import "./App.css"
import { useState, useReducer } from "react"
import WelcomeMsg from "./components/Welcomemessage"
import TodoitemsContext from "./store/store-to-do-items"


const todoitemReducer = (currToDoitems, action) => {
  let newTodoitems = currToDoitems;
  if (action.type === 'NEW_ITEM') {
    newTodoitems = [...currToDoitems, {
      name: action.payload.addnewTask,
      dueDate: action.payload.dueDate
    }]
  }
  else if (action.type === 'DELETE_ITEM') {
    newTodoitems = currToDoitems.filter((item) => item.name !== action.payload.addnewTask);
    // setTodoitems(newTodoItems);
    // console.log(`Deleted item is ${todoitemName}`);
  }
  return newTodoitems;
}


function App() {


  // const [todoitems, setTodoitems] = useState([]);
  const [todoitems, dispatchtodoitems] = useReducer(todoitemReducer, []);

  const handleAddnewItem = (addnewTask, dueDate) => {
    console.log(`The new task ${addnewTask} Date:${dueDate}`);
    // const newTodoitem = [...todoitems, {
    //   name: addnewTask,
    //   dueDate: dueDate
    // }]

    //Rather than spreading the array it is good practice to apply the functional way to set the items
    // Functional Updates
    // setTodoitems((currValue) => [
    //   ...currValue, {
    //     name: addnewTask,
    //     dueDate: dueDate
    //   }]
    // );

    const newItemmAction = {
      type: "NEW_ITEM",
      payload: {
        addnewTask,
        dueDate
      }
    }

    dispatchtodoitems(newItemmAction);
  }


  const handleDeleteitem = (todoitemName) => {

    const DeleteItemmAction = {
      type: "DELETE_ITEM",
      payload: {
        addnewTask: todoitemName,
      }
    }

    dispatchtodoitems(DeleteItemmAction);
  }


  return (
    <TodoitemsContext.Provider value={{
      todoitems: todoitems,
      handleAddnewItem: handleAddnewItem,
      handleDeleteitem: handleDeleteitem
    }}>
      <center className="todo-container">
        <Appname></Appname>
        <AddToDo></AddToDo>
        <WelcomeMsg></WelcomeMsg>
        <TodoItems></TodoItems>
      </center>
    </TodoitemsContext.Provider>
  )
}

export default App

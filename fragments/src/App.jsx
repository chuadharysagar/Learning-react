import './App.css'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import MapArr from './MapArr'
import ErrorMessage from './components/ErrorMessage'
import Fooditems from './components/Fooditems'
import Container from './components/Container'
import FoodInput from './components/FoodInput'

function App() {
  // let fruits = ['Mango', 'Orange', 'Apple', 'Litchi', 'Avocardo', 'PineApple', 'Banana', 'Graps', 'Aellovera'];
  // let textStateArr= useState("The input entered by the user");
  // let textStateval= textStateArr[0];
  // let setTextState = textStateArr[1];

  // by the array destructuring 
  let [textToshow , setTextState]=useState();

let [fruits, setFoodItem]=useState(['Mango', 'Orange', 'Apple', 'Litchi', 'Avocardo'])


  const handleOnKeyDown=(event)=>{
       if(event.key==="Enter"){
        let newFooditem= event.target.value;
        console.log(newFooditem);
        let newItems= [...fruits,newFooditem];
        setFoodItem(newItems); 
            }
    // console.log(event);
    // setTextState(event.target.value);
   }

  

  return <React.Fragment>
    
      <h1>This is fragment in the react </h1>
      <ul>
        <li>fragment are used to return the multiple html element from App</li>
        <li>This are the all the task we can do via fragments in React</li>
        <li>We can write the React with two different way 1. via import 2.via empty elcosing angular bracket</li>
      </ul>

    <Container>
      <h2>Fruits in India</h2>
      <FoodInput handleOnKeyDown={handleOnKeyDown}></FoodInput>
      <p style={{fontSize:"25px", marginLeft:"50px"}}>{textToshow}</p>
      <ErrorMessage mainItem={fruits}></ErrorMessage>
      <Fooditems mainItem={fruits}></Fooditems>
    </Container>

  </React.Fragment>


}

export default App

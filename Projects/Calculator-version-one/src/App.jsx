// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import styles from './App.module.css'
import Display from './components/Display'
import ButtonContainer from './components/ButtonContainer'
import { useState } from 'react'

function App() {
  const [calVal , setCalVal] = useState("");
  const onbuttonClick=(buttonText)=>{
    console.log(buttonText);
    if(buttonText==='C'){
       setCalVal("");
    }
    else if(buttonText==='='){
        const result = eval(calVal);
        setCalVal(result);
    }
    else{
       const newDisplayVal= calVal + buttonText;
       setCalVal(newDisplayVal);

    }
  } 

  return <div className={styles.calculator}>
        <Display displayValue ={calVal}></Display>
        <ButtonContainer onbuttonClick ={onbuttonClick}></ButtonContainer>
  </div>

}

export default App

import styles from './FoodInput.module.css'
const FoodInput=({handleOnKeyDown})=>{
   
   return <input type="text" placeholder="Enter your Fruit name" 
   className={styles.foodinput}
   // onChange={hanldeonChange}
   onKeyDown={handleOnKeyDown}
   />
}

export default FoodInput;
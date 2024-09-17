import styles from './ButtonContainer.module.css'
const ButtonContainer = ({onbuttonClick}) => {
    const buttonNames=['C','1','2','+','3','4','-','5','6','8','7','8','/','=','9','0','.'];

    return <div className={styles.buttonContainer}>
        {buttonNames.map((btnName)=>(
            <button className={styles.button} onClick={()=>onbuttonClick(btnName)}>{btnName}</button>
        ))}

        {/* <button className={styles.button} >c</button>
        <button className={styles.button} >1</button>
        <button className={styles.button} >2</button>
        <button className={styles.button} >+</button> */}
    </div>
}

export default ButtonContainer;
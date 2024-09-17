import { useState } from 'react';
import styles from './Item.module.css'

const Item = ({ Fooditem ,bought}) => {
    const handleButtonOnClick=(event)=>{
        console.log(`${Fooditem} is clicked`);

     }
    return <>
        <li className={`fruit-list-item ${bought ?styles.activeList:""}`} style={{ color: Fooditem.charAt(0).toUpperCase() === 'A' ? 'green' : 'blue' }}>
            <span>{Fooditem}</span>

            <button className={styles.button}
                onClick={handleButtonOnClick}
            >Buy</button>

        </li>



    </>
}

export default Item;
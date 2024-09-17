
import { useState } from "react";
import Item from "./Item";
const Fooditems = ({ mainItem }) => {
    // use the hook usestate to paint the UI of the list active items 
    let [activeItems , SetActiveItems]= useState([])

    const onBuyButton=(item, event)=>{
        let newItems= [...activeItems,item];
        SetActiveItems(newItems);
    }

    return <>
        <ul className="fruit-list">
            {mainItem.map((item) => (
                <Item key={item} Fooditem={item} 
                bought={activeItems.includes(item)}
                ></Item>
            ))}
        </ul>
    </>
}


export default Fooditems;
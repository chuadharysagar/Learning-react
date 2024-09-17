import ToDoitem from "./ToDoitem";
import styles from './Todoitems.module.css'
import TodoitemsContext from "../store/store-to-do-items";
import { useContext } from "react";

function TodoItems({onDelete}) {
    const {todoitems} = useContext(TodoitemsContext);
//   console.log(todoitemFromcontext);
    return <>
        <div className={styles.ToDocontainer}>
            {todoitems.map((item)=>(
                <ToDoitem key={item.name} todoName={item.name} todoDate={item.dueDate} 
            ></ToDoitem>
            ))

            }

        </div>
    </>
}

export default TodoItems;
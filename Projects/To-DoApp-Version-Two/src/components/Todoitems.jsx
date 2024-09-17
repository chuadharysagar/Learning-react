import ToDoitem from "./ToDoitem";
import styles from './Todoitems.module.css'
function TodoItems({ todoitems ,onDelete}) {

    return <>
        <div className={styles.ToDocontainer}>
            {todoitems.map((item)=>(
                <ToDoitem key={item.name} todoName={item.name} todoDate={item.dueDate} onDelete={onDelete}></ToDoitem>
            ))

            }

        </div>
    </>
}

export default TodoItems;
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import TodoitemsContext from "../store/store-to-do-items";

function ToDoitem({todoName ,todoDate}) {
    const {handleDeleteitem} = useContext(TodoitemsContext);    
    
    return <div className="container">
        <div className="row my-row">
            <div className="col-6">
                {todoName}
            </div>
            <div className="col-4">
               {todoDate}
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-danger my-btn" onClick={()=>handleDeleteitem(todoName)}><MdDelete /></button>
            </div>
        </div>
    </div>
}

export default ToDoitem;
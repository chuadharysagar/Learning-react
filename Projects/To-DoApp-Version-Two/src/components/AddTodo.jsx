import { useState , useRef} from "react";
import { IoMdAddCircle } from "react-icons/io";

function AddToDo({onNewitem}) {
    // const[todoName , settodoName] = useState("");
    // const [newdueDate , setdueDate] = useState("");
    const noOfupdates = useRef(0);

    const todoElement = useRef();
    const dueDateElement =useRef();



    // const handleNewtask=(event)=>{
    //     settodoName(event.target.value);
    //     noOfupdates.current += 1;
        
    // }

    // const handeldueDate=(event)=>{
    //        setdueDate(event.target.value);
    //        console.log(`No of udates are: ${noOfupdates.current}`);
    // }

    const handleOnaddClicked=(event)=>{
        event.preventDefault();
        const todoName = todoElement.current.value;
        const newdueDate = dueDateElement.current.value;
        console.log(`${todoName} due on :${newdueDate}`);
        onNewitem(todoName,newdueDate);
        todoElement.current.value = "";
        dueDateElement.current.value = "";
        
        // addtodoElement.current.value="";
        // addtodoElement.current.value="";
        // setdueDate(""); settodoName("");
       
      
    }
    return <div className="container">
        <form className="row my-row"  onSubmit={handleOnaddClicked}>
            <div className="col-6">
                <input type="text" 
                ref={todoElement}
                placeholder="Enter To Do Here" 
                
                />
                {/* onChange={handleNewtask} value={todoName} */}
            </div>
            <div className="col-4">
                <input type="date" 
                ref={dueDateElement}
                  /> 
                {/* onChange={handeldueDate} value={newdueDate}   */}
            </div>
            <div className="col-2">
                <button className="btn btn-success my-btn" type="submit">
                <IoMdAddCircle />
                </button>
            </div>
        </form>
    </div>
}

export default AddToDo;
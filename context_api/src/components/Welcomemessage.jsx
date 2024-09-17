import { useContext } from "react";
import TodoitemsContext from "../store/store-to-do-items";

const WelcomeMsg=()=>{
    const {todoitems} = useContext(TodoitemsContext);


    return todoitems.length===0 &&  <h2>Enjoy Your Day !!</h2>;
    }

export default WelcomeMsg;
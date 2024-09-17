import { createContext } from "react";

const TodoitemsContext = createContext(
    {
        todoitems:[],
        handleAddnewItem :()=>{} ,
        handleDeleteitem :()=>{}
    }
);

export default TodoitemsContext;
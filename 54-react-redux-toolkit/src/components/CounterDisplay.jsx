import { useSelector } from "react-redux";

const CounterDisplay =()=>{
    const {counterVal} = useSelector((store) =>  store.counter);
    return <p className="lead mb-4">Current Counter Value: {counterVal}</p>

}

export default CounterDisplay;
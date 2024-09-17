import { useDispatch } from "react-redux";
import counterStore from "../store";
import { useRef } from "react";

const Controls = () => {
    const dispatch = useDispatch();
    const inputElement = useRef();

    const handleIncreament = () => {
        dispatch({
            type: 'increament'
        })
    }

    const handleDecreament = () => {
        dispatch({
            type: 'decreament'
        })
    }

    const handlePrivacyToggle = () => {
        dispatch({
            type: 'privacy'
        })
    }


    const handelOnclickAdd = () => {

        dispatch({
            type: 'ADD',
            payload: {
                num: inputElement.current.value,
            },
        })
        inputElement.current.value = "";
    }

    const handelOnclickSubtract = () => {
        dispatch({
            type: 'SUBTRACT',
            payload: {
                num: inputElement.current.value,
            },
        })

        inputElement.current.value = "";

    }

    return <>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button onClick={handleIncreament} type="button" className="btn btn-primary">+1</button>
            <button onClick={handleDecreament} type="button" className="btn btn-success">-1</button>
            <button onClick={handlePrivacyToggle} type="button" className="btn btn-warning">Priavcy Toggle</button>

        </div>

        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center controls-row">
            <input type="text" ref={inputElement} placeholder="Enter Number" className="number-input" />

            <button
                onClick={handelOnclickAdd}
                type="button" className="btn btn-info">Add</button>

            <button
                onClick={handelOnclickSubtract}
                type="button" className="btn btn-danger">Subtract</button>
        </div>

    </>
}

export default Controls;
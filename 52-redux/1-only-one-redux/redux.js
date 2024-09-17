// import the redux

const redux = require("redux");

// define a initial store 
// define a object 
const INITIAL_VALUE = {
    counter: 0,
}

// reducer funcion 
// unlike useReducer give the initial value here in reducer funtion declaration 
const reducer = (store = INITIAL_VALUE, action) => {
    let newStore = store;
    if (action.type === 'INCREAMENT') {
        newStore = { counter: store.counter + 1 };
    }
    else if (action.type === 'DECREAMENT') {
        newStore = { counter: store.counter - 1 };
    }

    else if(action.type === 'ADDITION'){
        newStore={ counter:store.counter + action.payload.number};
    }
    return newStore;
}

// create a store and pass the reducer funtion as arguments 
const store = redux.createStore(reducer);

// creating the subcriber 
// when the value will be called then the subcriber will be invoked and execute the  subcriber function
const subcriber = () => {

    // it returns the curretn value 
    const state = store.getState();

    // print curretn value 
    console.log(state);
}

// when ever the value will be changed then the evey time it will updated the value
store.subscribe(subcriber);

// action in the redux 
store.dispatch({ type: 'INCREAMENT' })
store.dispatch({ type: 'DECREAMENT' })

store.dispatch({
    type:'ADDITION',
    payload:{ number :7 },
})
import { createStore } from 'redux';
const INITIAL_VALUE = {
    counter: 0,
    privacy: true,
}
const CounterReducer = (counterStore = INITIAL_VALUE, action) => {

    if (action.type === 'increament') {
        return { ...counterStore , counterStore,counter: counterStore.counter + 1 }
    }
    else if (action.type === 'decreament') {
        return {...counterStore, counter: counterStore.counter - 1}
    }
    else if (action.type === 'ADD') {
        return { ...counterStore, counter: counterStore.counter + Math.floor(action.payload.num) }
    }
    else if (action.type === 'SUBTRACT') { 
        return {...counterStore, counter: counterStore.counter - Math.floor(action.payload.num)}
    }
    else if (action.type === 'privacy') {
        return { ...counterStore, privacy: !counterStore.privacy }

    }
    return counterStore;
}

const counterStore = createStore(CounterReducer);

const Increamnet = () => {

}

export default counterStore;

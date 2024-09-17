import {createSlice} from '@reduxjs/toolkit';
//create the separate slice for the counter

const counterSlice = createSlice({
    name: 'counter',
    initialState: { counterVal: 0 },
    // here define all the rducer method 
    reducers: {
        increment: (state) => {
            // no need to create a new val or the state 
            state.counterVal++;
        },

        decrement: (state) => {
            state.counterVal--;

        },

        add: (state, action) => {
            state.counterVal += Number(action.payload);

        },

        subtract: (state, action) => {
            state.counterVal -= Number(action.payload);

        }
    }
})


export const counterActions = counterSlice.actions;
export default counterSlice;
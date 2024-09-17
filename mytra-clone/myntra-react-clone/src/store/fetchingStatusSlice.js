import { createSlice } from '@reduxjs/toolkit';

const fetchingStatusSlice = createSlice({
    name: 'fetchStatus',
    initialState: {
        fetchDone: false,  // false - PENDING and true - DONE   
        currentlyFetching: false,
    },

    reducers: {
        markFetchDone: (state ) => {
             state.fetchDone = true;
        },

        markFetchingStarted: (state ) => {
            
            state.currentlyFetching = true;
        },

        markFetchingFinished: (state ) => {
            state.currentlyFetching = false;
        }
    }
})

export const fetchStatusActions = fetchingStatusSlice.actions;

export default fetchingStatusSlice;
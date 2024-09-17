import { configureStore } from '@reduxjs/toolkit';
import itemSlice from './itemSlice';
import fetchingStatusSlice from './fetchingStatusSlice';
import BagSlice from './bagSlice';


const myntraStore = configureStore({
    reducer: {
        items: itemSlice.reducer,
        fetchStatus: fetchingStatusSlice.reducer,
        bag: BagSlice.reducer,
    }

});


export default myntraStore;
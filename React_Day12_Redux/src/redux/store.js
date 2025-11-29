import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './reducer';
import textReducer from './textReducer';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        text: textReducer,
    },
});

export default store;
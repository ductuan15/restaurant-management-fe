import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import profileReducer from '../features/profile/profileSlice';
import themeReducer from '../features/theme/themeSlice';
import menuReducer from '../features/menu/menuSlice';
import billReducer from '../features/bill/billSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        profile: profileReducer,
        theme: themeReducer,
        menu: menuReducer,
        bill: billReducer,
    },
});

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchMenu } from './menuAPI';

const menuInitialState = {
    data: [],
    state: 'succeeded',
};

export const selectMenu = (state) => state.menu;

export const getAllMenu = createAsyncThunk('menu/getAllMenu', async () => {
    const [data, error] = await fetchMenu();
    console.log(data);
    return data;
});

const getAllMenuBuilder = (builder) => {
    builder.addCase(getAllMenu.fulfilled, (state, action) => {
        return {
            state: 'succeeded',
            data: action.payload,
        };
    });
    return builder;
};

const menuSlice = createSlice({
    name: 'menu',
    initialState: menuInitialState,
    reducers: {},
    extraReducers: (builder) => {
        getAllMenuBuilder(builder);
    },
});

export const {} = menuSlice.actions;
export default menuSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ApiCallState from '../../common/enum/ApiState';
import { fetchMenu, addMenuItem } from './menuAPI';

const menuInitialState = {
    data: [],
    state: ApiCallState.SUCCEEDED,
};

export const selectMenu = (state) => state.menu;

export const getAllMenu = createAsyncThunk('menu/getAllMenu', async () => {
    const [data, error] = await fetchMenu();
    console.log(data);
    return data;
});

export const addNewMenuItem = createAsyncThunk(
    'menu/addNewMenuItem',
    async () => {
        const [data, error] = await addMenuItem();
        console.log(data);
        return data;
    }
);

const getAllMenuBuilder = (builder) => {
    builder.addCase(getAllMenu.fulfilled, (state, action) => {
        return {
            state: ApiCallState.SUCCEEDED,
            data: action.payload,
        };
    });
    return builder;
};

const addMenuItemBuilder = (builder) => {
    builder.addCase(addNewMenuItem.fulfilled, (state, action) => {
        return {
            state: ApiCallState.SUCCEEDED,
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
        addMenuItemBuilder(builder);
    },
});

export const {} = menuSlice.actions;
export default menuSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ApiCallState from '../../common/enum/ApiState';
import { fetchMenu, addMenuItem, fetchMenuItemById } from './menuAPI';

const menuInitialState = {
    data: [],
    currentMenuItem: {
        name: '',
        price: 0,
        description: '',
        image: null,
        type: null,
    },
    state: ApiCallState.SUCCEEDED,
};

export const selectMenu = (state) => state.menu;

export const getAllMenuThunk = createAsyncThunk(
    'menu/fetchAllMenu',
    async (page, limit) => {
        const [data, error] = await fetchMenu(page);
        console.log(data);
        return data;
    }
);

export const addNewMenuItemThunk = createAsyncThunk(
    'menu/addNewMenuItem',
    async (menuItem) => {
        const [data, error] = await addMenuItem(menuItem);
        console.log(data);
        return data;
    }
);

export const fetchMenuItemByIdThunk = createAsyncThunk(
    'menu/fetchMenuItemById',
    async (menuItemId) => {
        const [data, error] = await fetchMenuItemById(menuItemId);
        console.log(data);
        return data;
    }
);

const getAllMenuBuilder = (builder) => {
    builder.addCase(getAllMenuThunk.fulfilled, (state, action) => {
        return {
            state: ApiCallState.SUCCEEDED,
            data: action.payload,
        };
    });
    return builder;
};

const addMenuItemBuilder = (builder) => {
    builder.addCase(addNewMenuItemThunk.fulfilled, (state, action) => {
        return {
            ...state,
            state: ApiCallState.SUCCEEDED,
        };
    });
    return builder;
};

const fetchMenuItemByIdBuilder = (builder) => {
    builder.addCase(fetchMenuItemByIdThunk.fulfilled, (state, action) => {
        return {
            ...state,
            state: ApiCallState.SUCCEEDED,
            currentMenuItem: action.payload,
        };
    });
};

const menuSlice = createSlice({
    name: 'menu',
    initialState: menuInitialState,
    reducers: {},
    extraReducers: (builder) => {
        getAllMenuBuilder(builder);
        addMenuItemBuilder(builder);
        fetchMenuItemByIdBuilder(builder);
    },
});

export const {} = menuSlice.actions;
export default menuSlice.reducer;

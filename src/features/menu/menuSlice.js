import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ApiCallState from '../../common/enum/ApiState';
import {
    fetchMenu,
    addMenuItem,
    fetchMenuItemById,
    updateMenuItem,
} from './menuAPI';

export const initialCurrentMenuItem = {
    name: '',
    price: 0,
    description: '',
    image: '',
    type: '',
};

const menuInitialState = {
    data: [],
    totalPage: 0,
    currentMenuItem: {
        ...initialCurrentMenuItem,
    },
    currentOnOrderMenuItem: {
        name: '',
        price: 0,
        description: '',
        image: '',
        type: '',
    },
    state: ApiCallState.SUCCEEDED,
};

export const selectMenu = (state) => state.menu;

export const getAllMenuThunk = createAsyncThunk(
    'menu/fetchAllMenu',
    async (filter) => {
        console.log(filter);
        const [data, error] = await fetchMenu(
            filter.page,
            filter.key,
            filter.priceRange,
            filter.type
        );
        console.log(data);
        return data;
    }
);

export const addNewMenuItemThunk = createAsyncThunk(
    'menu/addNewMenuItem',
    async (menuItem) => {
        console.log(menuItem);
        const [data, error] = await addMenuItem(menuItem);
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

export const updateMenuItemThunk = createAsyncThunk(
    'menu/updateById',
    async (menuItem) => {
        const [data, error] = await updateMenuItem(menuItem);
        console.log(data);
        return data;
    }
);

const getAllMenuBuilder = (builder) => {
    builder.addCase(getAllMenuThunk.fulfilled, (state, action) => {
        return {
            state: ApiCallState.SUCCEEDED,
            data: action.payload.items,
            totalPage: action.payload.totalPage,
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

const updateMenuItemBuilder = (builder) => {
    builder.addCase(updateMenuItemThunk.fulfilled, (state, action) => {
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
        updateMenuItemBuilder(builder);
    },
});

export const {} = menuSlice.actions;
export default menuSlice.reducer;

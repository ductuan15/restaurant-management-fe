import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ApiCallState from '../../common/enum/ApiState';
import { fetchBill } from './billApi';

const billInitState = {
    data: [],
    state: ApiCallState.SUCCEEDED,
};

export const selectBill = (state) => state.bill;

export const fetchAllBill = createAsyncThunk('bill/getAllBill', async () => {
    const [data, error] = await fetchBill();
    return data;
});

const fetchAllMenuBuilder = (builder) => {
    builder.addCase(fetchAllBill.fulfilled, (state, action) => {
        return {
            data: action.payload,
            state: ApiCallState.SUCCEEDED,
        };
    });
};

const billSlice = createSlice({
    name: 'bill',
    initialState: billInitState,
    reducer: {},
});

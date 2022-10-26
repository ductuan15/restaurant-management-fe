import { QueryBuilderRounded } from '@mui/icons-material';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ApiCallState from '../../common/enum/ApiState';
import {
    createBill,
    fetchBill,
    fetchBillById,
    fetchNotPaidBills,
    removeMenuIdFromBill,
    updateBillStatus,
} from './billApi';

const billInitState = {
    data: [],
    notPaidBills: [],
    currentBill: null,
    state: ApiCallState.SUCCEEDED,
};

export const selectBill = (state) => state.bill;

export const fetchAllBillThunk = createAsyncThunk(
    'bill/getAllBill',
    async () => {
        const [data, error] = await fetchBill();
        return data;
    }
);

export const fetchBillByIdThunk = createAsyncThunk(
    'bill/fetchBillById',
    async (billId) => {
        const [data, error] = await fetchBillById(billId);
        return data;
    }
);

export const updateStatusBillThunk = createAsyncThunk(
    'bill/updateStatus',
    async (billId) => {
        const [data, error] = await updateBillStatus(billId);
        return data;
    }
);

export const removeMenuIdFromBillThunk = createAsyncThunk(
    'bill/removeBillItem',
    async ({ billId, menuId }) => {
        console.log(billId);
        console.log(menuId);

        const [data, error] = await removeMenuIdFromBill(billId, menuId);
        return data;
    }
);

export const fetchNotPaidBillsThunk = createAsyncThunk(
    'bill/getNotPaidBill',
    async () => {
        const [data, error] = await fetchNotPaidBills();
        console.log(data);
        return data;
    }
);

export const createBillThunk = createAsyncThunk(
    'bill/createBill',
    async ({ menuItemOrders, billId }) => {
        console.log({ menuItemOrders, billId });
        const [data, error] = await createBill(menuItemOrders, billId);
        return data;
    }
);

const fetchAllMenuBuilder = (builder) => {
    builder.addCase(fetchAllBillThunk.fulfilled, (state, action) => {
        return {
            ...state,
            data: action.payload,
            state: ApiCallState.SUCCEEDED,
        };
    });
};

const fetchBillByIdBuilder = (builder) => {
    builder.addCase(fetchBillByIdThunk.fulfilled, (state, action) => {
        return {
            ...state,
            currentBill: action.payload,
            state: ApiCallState.SUCCEEDED,
        };
    });
};

const updateBillStatusBuilder = (builder) => {
    builder.addCase(updateStatusBillThunk.fulfilled, (state, action) => {
        console.log(action.payload);
        state.data.some((billItem) => {
            if (billItem.id === action.payload.id) {
                billItem.status = true;
                return true;
            }
            return false;
        });
        if (state.currentBill.id === action.payload.id) {
            state.currentBill = action.payload;
        }
        state.state = ApiCallState.SUCCEEDED;
    });
};

const removeMenuIdFromBillBuilder = (builder) => {
    builder.addCase(removeMenuIdFromBillThunk.fulfilled, (state, action) => {
        state.currentBill = action.payload;
    });
};

const fetchNotPaidBillsThunkBuilder = (builder) => {
    builder.addCase(fetchNotPaidBillsThunk.fulfilled, (state, action) => {
        console.log(action.payload);
        return {
            ...state,
            notPaidBills: action.payload,
        };
    });
};

const createNewBillBuilder = (builder) => {
    builder.addCase(createBillThunk.fulfilled, (state, action) => {
        return {
            ...state,
            state: ApiCallState.SUCCEEDED,
        };
    });
};

const billSlice = createSlice({
    name: 'bill',
    initialState: billInitState,
    reducer: {},
    extraReducers: (builder) => {
        fetchAllMenuBuilder(builder);
        fetchBillByIdBuilder(builder);
        updateBillStatusBuilder(builder);
        removeMenuIdFromBillBuilder(builder);
        fetchNotPaidBillsThunkBuilder(builder);
        createNewBillBuilder(builder);
    },
});

export default billSlice.reducer;

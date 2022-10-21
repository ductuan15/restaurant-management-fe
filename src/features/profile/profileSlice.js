import { createSlice } from '@reduxjs/toolkit';
import { fetchProfile } from './profileAPI';

const profileInitialState = {
    id: '',
    phoneNumber: '',
    email: '',
    username: '',
};

export const selectProfile = (state) => state.profile;

const profileSlice = createSlice({
    name: 'profile',
    initialState: profileInitialState,
    reducers: {
        update: (state, action) => {
            return {
                ...state,
                email: action.payload.email,
                phoneNumber: action.payload.phoneNumber,
                username: action.payload.username,
            };
        },
        logout: (state) => {
            state = {
                ...profileInitialState,
            };
        },
        getProfile: async (state, action) => {
            const [data, error] = await fetchProfile(action.payload.userId);
            if (error) {
                alert(error.message);
            }
            console.log(data);
            return state;
        },
    },
});

export const { update, logout, getProfile } = profileSlice.actions;

export default profileSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export const themeContextInitState = {
    isDarkMode: false,
};

export const selectTheme = (state) => state.theme;

const themeSlice = createSlice({
    name: 'theme',
    initialState: themeContextInitState,
    reducers: {
        toggleTheme: (state) => {
            return {
                ...state,
                isDarkMode: !state.isDarkMode,
            };
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;

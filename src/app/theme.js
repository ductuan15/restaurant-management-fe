import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            paper: '#f2f2f2',
        },
        text: {
            primary: '#424242',
        },
        primary: {
            main: '#FF8787',
        },
        secondary: {
            main: '#5F9DF7',
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            paper: '#222',
        },
        text: {
            primary: '#fff',
        },
        primary: {
            main: '#FF8787',
        },
        secondary: {
            main: '#5F9DF7',
        },
    },
});

export const ThemePalette = {
    primary: 'primary',
    secondary: 'secondary',
};

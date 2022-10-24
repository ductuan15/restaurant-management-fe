import React from 'react';

import { ThemeProvider } from '@mui/material/styles';
import { selectTheme } from './features/theme/themeSlice';
import { darkTheme, lightTheme } from './app/theme';
import HomePage from './pages/HomePage';
import { useSelector } from 'react-redux';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuDetail from './features/menu/pages/MenuDetail';

export const App = () => {
    const themeState = useSelector(selectTheme);
    return (
        <ThemeProvider theme={themeState.isDarkMode ? darkTheme : lightTheme}>
            <Router>
                <Routes>
                    <Route path={'/'} element={<HomePage />} />
                    <Route path={'/menu/:menuId'} element={<MenuDetail />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;

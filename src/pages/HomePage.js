import React from 'react';
import { Box } from '@mui/material';

import TopBar from '../components/TopBar';
import MenuList from '../features/menu/pages/MenuList';
import TemporaryDrawer from '../components/Drawer';
import { Outlet } from 'react-router-dom';

const HomePage = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <MenuList></MenuList>
        </Box>
    );
};

export default HomePage;

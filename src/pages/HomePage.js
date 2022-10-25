import React from 'react';
import { Box } from '@mui/material';

import TopBar from '../components/TopBar';
import MenuList from '../features/menu/pages/MenuList';

const HomePage = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <TopBar></TopBar>
            <MenuList></MenuList>
        </Box>
    );
};

export default HomePage;

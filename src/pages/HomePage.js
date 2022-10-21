import React from 'react';
import { Box } from '@mui/material';

import MenuList from '../features/menu/components/MenuList';
import TopBar from '../components/TopBar';

const HomePage = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <TopBar></TopBar>
            <MenuList></MenuList>
        </Box>
    );
};

export default HomePage;

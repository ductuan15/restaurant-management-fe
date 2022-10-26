import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

const TopBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Box sx={{ marginRight: 2 }}>
                    <Link color="text.primary" href="/" underline="none">
                        Restaurant
                    </Link>
                </Box>
                <Box>
                    <Link color="text.primary" href="/bill" underline="none">
                        Bill
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default TopBar;

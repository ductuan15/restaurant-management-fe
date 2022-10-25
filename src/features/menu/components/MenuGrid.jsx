import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import MenuItem from './MenuItem';
const MenuGrid = ({ menuItems }) => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {menuItems.map((menuItem) => {
                        return (
                            <Grid xs={3}>
                                <MenuItem
                                    menuItem={menuItem}
                                    key={menuItem.id}
                                ></MenuItem>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </>
    );
};

export default MenuGrid;

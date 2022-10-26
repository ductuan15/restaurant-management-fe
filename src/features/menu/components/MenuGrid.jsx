import React, { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import MenuItem from './MenuItem';
import MenuOrder from './MenuOrder';
const MenuGrid = ({ menuItems }) => {
    const [isOrderOpen, setIsOrderOpen] = useState(false);
    const [orderingMenuItem, setOrderingMenuItem] = useState(null);

    const handleOnCloseOrder = () => {
        setIsOrderOpen(false);
    };

    const handleOnOpenOrder = (menuItem) => {
        return (e) => {
            setIsOrderOpen(true);
            setOrderingMenuItem(menuItem);
        };
    };
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
                                    onOpenOrder={handleOnOpenOrder}
                                ></MenuItem>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
            {orderingMenuItem && isOrderOpen && (
                <MenuOrder
                    isOpen={isOrderOpen}
                    onClose={handleOnCloseOrder}
                    menuItem={orderingMenuItem}
                ></MenuOrder>
            )}
        </>
    );
};

export default MenuGrid;

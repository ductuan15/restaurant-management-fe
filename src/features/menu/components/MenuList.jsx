import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMenu, selectMenu } from '../menuSlice';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import MenuItem from './MenuItem';
const MenuList = () => {
    const menuState = useSelector(selectMenu);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllMenu());
    }, []);
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {menuState.data.map((menuItem) => {
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

export default MenuList;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MenuGrid from '../components/MenuGrid';
import { getAllMenuThunk, selectMenu } from '../menuSlice';
import Pagination from '@mui/material/Pagination';
import { ThemePalette } from '../../../app/theme';

const MenuList = () => {
    const menuState = useSelector(selectMenu);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllMenuThunk(1));
    }, []);

    const handleOnChangePage = (e, value) => {
        dispatch(getAllMenuThunk(value));
    };

    return (
        <>
            <MenuGrid menuItems={menuState.data}></MenuGrid>
            <Pagination
                count={10}
                onChange={handleOnChangePage}
                color={ThemePalette.primary}
            />
        </>
    );
};

export default MenuList;

import {
    Box,
    MenuItem,
    Select,
    TextField,
    InputLabel,
    FormControl,
    Chip,
    InputAdornment,
    Autocomplete,
    Button,
} from '@mui/material';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import foodType from '../../../common/enum/foodType';
import MenuDetailForm from '../components/MenuDetailForm';
import { fetchMenuItemById } from '../menuAPI';
import {
    addNewMenuItemThunk,
    fetchMenuItemByIdThunk,
    selectMenu,
} from '../menuSlice';
const MenuDetail = () => {
    const { menuId } = useParams();
    const dispatch = useDispatch();
    const { currentMenuItem } = useSelector(selectMenu);
    useEffect(() => {
        dispatch(fetchMenuItemByIdThunk(menuId));
    }, []);
    return <MenuDetailForm menuItemDetail={currentMenuItem}></MenuDetailForm>;
};

export default MenuDetail;

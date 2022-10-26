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
import {
    fetchMenuItemByIdThunk,
    selectMenu,
    initialCurrentMenuItem,
} from '../menuSlice';
const MenuDetail = () => {
    const { menuId } = useParams();
    const dispatch = useDispatch();
    const { currentMenuItem } = useSelector(selectMenu);
    useEffect(() => {
        (async () => {
            if (menuId) await dispatch(fetchMenuItemByIdThunk(menuId)).unwrap();
        })();
    }, []);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <MenuDetailForm
                menuItemDetail={
                    menuId
                        ? currentMenuItem
                        : {
                              ...initialCurrentMenuItem,
                          }
                }
            ></MenuDetailForm>
            ;
        </Box>
    );
};

export default MenuDetail;

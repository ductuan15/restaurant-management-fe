import { LocalConvenienceStoreOutlined } from '@mui/icons-material';
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
import { fetchMenuItemById } from '../menuAPI';
import { addNewMenuItemThunk } from '../menuSlice';
const MenuDetailForm = ({ menuItemDetail }) => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            name: menuItemDetail.name,
            type: foodType.ALCOHOL,
            description: menuItemDetail.description,
            price: menuItemDetail.price,
            ingredient: '',
        },
        enableReinitialize: true,
        onSubmit: (values) => {
            console.log(values);
            dispatch(
                addNewMenuItemThunk({
                    ...values,
                    type: values.type.value,
                })
            );
        },
    });

    return (
        <Box sx={{ display: 'flex' }}>
            <Box sx={{ margin: 1 }}>
                <img src={menuItemDetail.image}></img>
            </Box>
            <Box>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl>
                        {/* Food Type  */}
                        <Box>
                            <InputLabel id="food-type">Age</InputLabel>
                            <Select
                                sx={{ margin: 1 }}
                                labelId="food-type"
                                label="Food type"
                                name="type"
                                {...formik.getFieldProps('type')}
                            >
                                <MenuItem value={foodType.BREAKFAST}>
                                    {foodType.BREAKFAST.display}
                                </MenuItem>
                                <MenuItem value={foodType.LUNCH}>
                                    {foodType.LUNCH.display}
                                </MenuItem>
                                <MenuItem value={foodType.DINNER}>
                                    {foodType.DINNER.display}
                                </MenuItem>
                                <MenuItem value={foodType.ALCOHOL}>
                                    {foodType.ALCOHOL.display}
                                </MenuItem>
                                <MenuItem value={foodType.SOFTDRINK}>
                                    {foodType.SOFTDRINK.display}
                                </MenuItem>
                            </Select>
                        </Box>

                        {/* Name */}
                        <TextField
                            sx={{ margin: 1 }}
                            label="Name"
                            {...formik.getFieldProps('name')}
                        ></TextField>

                        {/* Price */}
                        <TextField
                            sx={{ margin: 1 }}
                            label="Price"
                            {...formik.getFieldProps('price')}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        $
                                    </InputAdornment>
                                ),
                            }}
                        />

                        {/* Description */}
                        <TextField
                            label="Description"
                            multiline
                            sx={{ margin: 1 }}
                            {...formik.getFieldProps('description')}
                        ></TextField>
                    </FormControl>
                    <Button type="submit">Submit</Button>
                </form>
            </Box>
        </Box>
    );
};

export default MenuDetailForm;

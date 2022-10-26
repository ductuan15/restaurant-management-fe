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
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import foodType from '../../../common/enum/foodType';
import { fetchMenuItemById } from '../menuAPI';
import { addNewMenuItemThunk, updateMenuItemThunk } from '../menuSlice';
const MenuDetailForm = ({ menuItemDetail }) => {
    const dispatch = useDispatch();
    const [isSuccess, setIsSuccess] = useState(false);

    const handleClose = (event, reason) => {
        setIsSuccess(false);
    };

    const formik = useFormik({
        initialValues: {
            name: menuItemDetail.name,
            type: foodType.ALCOHOL,
            description: menuItemDetail.description,
            price: menuItemDetail.price,
            ingredient: menuItemDetail.ingredient,
            image: menuItemDetail.image,
        },
        enableReinitialize: true,
        onSubmit: (values) => {
            if (menuItemDetail.id) {
                dispatch(
                    updateMenuItemThunk({
                        ...values,
                        type: values.type.value,
                        id: menuItemDetail.id,
                    })
                );
            } else {
                dispatch(
                    addNewMenuItemThunk({
                        ...values,
                        type: values.type.value,
                    })
                );
            }
        },
    });

    return (
        <Box sx={{ flexGrow: 1 }}>
            <form onSubmit={formik.handleSubmit}>
                <Box
                    component="img"
                    src={
                        menuItemDetail.image
                            ? menuItemDetail.image
                            : 'https://placeholder.pics/svg/400x300'
                    }
                    sx={{ margin: 1, maxHeight: 300, maxWidth: 400 }}
                ></Box>
                <Box>
                    <Button
                        sx={{ margin: 1, width: 1 / 4 }}
                        variant="contained"
                        type="submit"
                    >
                        Save
                    </Button>
                    <Button
                        sx={{ margin: 1, width: 1 / 4 }}
                        type="submit"
                        variant="contained"
                    >
                        Delete
                    </Button>
                    {/* Food Type  */}
                    <Box>
                        <FormControl sx={{ margin: 1, width: 1 }}>
                            <InputLabel id="food-type">Food type</InputLabel>
                            <Select
                                sx={{ width: 1 / 2 }}
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
                        </FormControl>
                    </Box>

                    {/* Name */}
                    <TextField
                        sx={{ margin: 1, width: 1 / 2 }}
                        label="Name"
                        {...formik.getFieldProps('name')}
                    ></TextField>

                    {/* Price */}
                    <TextField
                        sx={{ margin: 1, width: 1 / 2 }}
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
                        sx={{ margin: 1, width: 1 / 2 }}
                        {...formik.getFieldProps('description')}
                    ></TextField>

                    {/* Image url */}
                    <TextField
                        label="Image url"
                        multiline
                        sx={{ margin: 1, width: 1 / 2 }}
                        {...formik.getFieldProps('image')}
                    ></TextField>

                    {/* Image url */}
                    <TextField
                        label="Ingredients"
                        multiline
                        sx={{ margin: 1, width: 1 / 2 }}
                        {...formik.getFieldProps('ingredient')}
                    ></TextField>
                </Box>
            </form>
        </Box>
    );
};

export default MenuDetailForm;

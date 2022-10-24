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
import React from 'react';
import { useDispatch } from 'react-redux';
import foodType from '../../../common/enum/foodType';
import { addNewMenuItem } from '../menuSlice';
const MenuDetail = ({ menuItem }) => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            name: '',
            foodType: foodType.ALCOHOL,
            description: '',
            price: 0,
        },
        onSubmit: (values) => {
            dispatch(addNewMenuItem(values));
        },
    });

    return (
        <Box sx={{ display: 'flex' }}>
            <Box sx={{ margin: 1 }}>
                <img src="http://placeholder.pics/svg/400"></img>
            </Box>
            <Box>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl>
                        {/* Food Type  */}
                        <InputLabel id="food-type">Age</InputLabel>
                        <Select
                            sx={{ margin: 1 }}
                            labelId="food-type"
                            label="Food type"
                            name="foodType"
                            {...formik.getFieldProps('foodType')}
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

                        {/* Name */}
                        <TextField
                            sx={{ margin: 1 }}
                            label="Name"
                            placeholder="Name of menu item"
                            {...formik.getFieldProps('name')}
                        ></TextField>

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
                        <TextField
                            label="Description"
                            placeholder="Describe this disk"
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

export default MenuDetail;

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
];

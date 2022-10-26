import React from 'react';
import {
    TextField,
    Box,
    MenuItem,
    Select,
    InputLabel,
    Slider,
    Button,
    FormControl,
    Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import foodType from '../../../common/enum/foodType';
import SearchIcon from '@mui/icons-material/Search';

const MenuSearchFilter = ({ onSubmitSearch, filterValue }) => {
    const formik = useFormik({
        initialValues: {
            ...filterValue,
        },
        enableReinitialize: true,
        onSubmit: (values) => {
            if (values.type === 'none') values.type = null;
            onSubmitSearch(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                        sx={{ marginRight: 2 }}
                        label="Search"
                        name="searchKey"
                        {...formik.getFieldProps('searchKey')}
                    ></TextField>

                    <FormControl sx={{ marginRight: 2, minWidth: 200 }}>
                        <InputLabel id="food-type">Food type</InputLabel>
                        <Select
                            labelId="food-type"
                            label="Food type"
                            name="type"
                            {...formik.getFieldProps('type')}
                        >
                            <MenuItem value="none">
                                <em>None</em>
                            </MenuItem>
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

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: 300,
                        }}
                    >
                        <Typography gutterBottom>
                            {` Price: ${
                                formik.getFieldProps('priceRange').value[0]
                            }$ → ${
                                formik.getFieldProps('priceRange').value[1]
                            } $`}
                        </Typography>
                        <Slider
                            name="priceRange"
                            min={1}
                            max={2000}
                            value={[0, 100]}
                            valueLabelDisplay="auto"
                            {...formik.getFieldProps('priceRange')}
                        />
                    </Box>
                </Box>

                <Button
                    type="submit"
                    variant="contained"
                    startIcon={<SearchIcon />}
                >
                    Search
                </Button>
            </Box>
        </form>
    );
};

export default MenuSearchFilter;

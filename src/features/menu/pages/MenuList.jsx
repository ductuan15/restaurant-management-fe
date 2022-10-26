import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MenuGrid from '../components/MenuGrid';
import { getAllMenuThunk, selectMenu } from '../menuSlice';
import Pagination from '@mui/material/Pagination';
import { ThemePalette } from '../../../app/theme';
import MenuSearchFilter from '../components/MenuSearchFilter';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const MenuList = () => {
    const menuState = useSelector(selectMenu);
    const [page, setPage] = useState(1);
    const [filterValue, setFilterValue] = useState({
        searchKey: '',
        priceRange: [0, 2000],
        type: 'none',
    });
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(filterValue.priceRange);
        dispatch(
            getAllMenuThunk({
                page,
                key: '',
                priceRange: filterValue.priceRange,
                type: null,
            })
        );
    }, []);

    const handleOnChangePage = (e, value) => {
        setPage(value);
        dispatch(
            getAllMenuThunk({
                page: value,
                key: filterValue.searchKey,
                priceRange: filterValue.priceRange,
                type: filterValue.type ? filterValue.type.value : null,
            })
        );
    };

    const handleSubmitSearch = (values) => {
        setFilterValue(values);
        dispatch(
            getAllMenuThunk({
                page,
                key: values.searchKey,
                priceRange: values.priceRange,
                type: values.type ? values.type.value : null,
            })
        );
    };

    return (
        <Box sx={{ margin: 2 }}>
            <MenuSearchFilter
                onSubmitSearch={handleSubmitSearch}
                filterValue={filterValue}
            ></MenuSearchFilter>
            <hr></hr>
            <Button
                href="/menu/createMenuItem"
                variant="contained"
                startIcon={<AddIcon />}
            >
                Add new menu item
            </Button>
            <Box sx={{ marginTop: 2 }}>
                <MenuGrid menuItems={menuState.data}></MenuGrid>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    marginTop: 2,
                    justifyContent: 'center',
                }}
            >
                <Pagination
                    count={menuState.totalPage}
                    onChange={handleOnChangePage}
                    color={ThemePalette.primary}
                    size="large"
                />
            </Box>
        </Box>
    );
};

export default MenuList;

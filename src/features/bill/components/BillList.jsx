import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Chip,
    TablePagination,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectBill,
    fetchAllBillThunk,
    fetchBillByIdThunk,
} from '../billSlice';
import BillDetail from './BillDetail';
const BillTable = () => {
    const { data, currentBill } = useSelector(selectBill);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [isBillDetailOpen, setIsBillDetailOpen] = useState(false);
    const dispatch = useDispatch();

    const handlePageChange = (e, newPage) => {
        setPage(newPage);
    };
    const handleOnOpenBillDetail = (billId) => {
        return (e) => {
            setIsBillDetailOpen(true);
            dispatch(fetchBillByIdThunk(billId));
        };
    };
    const handleOnCloseBillDetail = (e) => {
        setIsBillDetailOpen(false);
    };
    useEffect(() => {
        dispatch(fetchAllBillThunk());
    }, []);
    return (
        <>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableCell align="right">Id</TableCell>
                        <TableCell align="right">Total price</TableCell>
                        <TableCell align="right">Number of item</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Date</TableCell>
                    </TableHead>
                    <TableBody>
                        {data
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((bill) => (
                                <TableRow
                                    key={bill.name}
                                    sx={{
                                        '&:last-child td, &:last-child th': {
                                            border: 0,
                                        },
                                    }}
                                    hover
                                    onClick={handleOnOpenBillDetail(bill.id)}
                                >
                                    <TableCell align="right">
                                        {bill.id}
                                    </TableCell>
                                    <TableCell align="right">
                                        {bill.totalPrice}
                                    </TableCell>
                                    <TableCell align="right">
                                        {bill.items.length}
                                    </TableCell>
                                    <TableCell align="right">
                                        {bill.status ? (
                                            <Chip
                                                color="success"
                                                label={'Paid'}
                                            ></Chip>
                                        ) : (
                                            <Chip
                                                color="warning"
                                                label={'Not paid'}
                                            ></Chip>
                                        )}
                                    </TableCell>
                                    <TableCell align="right">
                                        {bill.datetime}
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handlePageChange}
            />
            <BillDetail
                isOpen={isBillDetailOpen}
                onClose={handleOnCloseBillDetail}
                billDetail={currentBill}
            ></BillDetail>
        </>
    );
};

export default BillTable;

import {
    Dialog,
    DialogTitle,
    Box,
    Typography,
    DialogContent,
    TableContainer,
    Paper,
    TableHead,
    TableCell,
    TableBody,
    TableRow,
    Table,
    Button,
    IconButton,
    Chip,
    DialogActions,
    Snackbar,
    Alert,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { ThemePalette } from '../../../app/theme';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    removeMenuIdFromBillThunk,
    selectBill,
    updateStatusBillThunk,
} from '../billSlice';
const BillDetail = ({ isOpen, onClose, billDetail }) => {
    const dispatch = useDispatch();
    const handleMaskAsPaid = (e) => {
        (async () => {
            if (billDetail)
                await dispatch(updateStatusBillThunk(billDetail.id)).unwrap();
            setIsDone(true);
        })();
    };
    const [isDone, setIsDone] = useState(false);

    const handleAlertClose = (event, reason) => {
        setIsDone(false);
    };

    const handleClearMenuItem = (menuId) => {
        return (e) => {
            (async () => {
                if (billDetail)
                    await dispatch(
                        removeMenuIdFromBillThunk({
                            billId: billDetail.id,
                            menuId: menuId,
                        })
                    ).unwrap();
                setIsDone(true);
            })();
        };
    };

    if (billDetail) {
        return (
            <>
                <Dialog
                    maxWidth={'sm'}
                    fullWidth
                    onClose={onClose}
                    open={isOpen}
                >
                    <DialogTitle>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Box>
                                <Typography variant="h4">
                                    Bill Id:{billDetail.id}
                                </Typography>
                                <Typography
                                    color={'text.' + ThemePalette.primary}
                                >
                                    {new Date(
                                        billDetail.datetime
                                    ).toLocaleString()}
                                </Typography>
                            </Box>
                            {billDetail.status ? (
                                <Chip color="success" label={'Paid'}></Chip>
                            ) : (
                                <Chip color="warning" label={'Not paid'}></Chip>
                            )}
                        </Box>
                    </DialogTitle>
                    <DialogContent>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableCell align="right">
                                        Item name
                                    </TableCell>
                                    <TableCell align="right">
                                        Quantity
                                    </TableCell>
                                    <TableCell align="right">
                                        Price per item
                                    </TableCell>
                                    <TableCell align="right">Price</TableCell>
                                    <TableCell align="right"></TableCell>
                                </TableHead>
                                <TableBody>
                                    {billDetail.items.map((item) => (
                                        <TableRow
                                            key={item.menuId}
                                            sx={{
                                                '&:last-child td, &:last-child th':
                                                    {
                                                        border: 0,
                                                    },
                                            }}
                                            hover
                                        >
                                            <TableCell align="right">
                                                {item.menuName}
                                            </TableCell>
                                            <TableCell align="right">
                                                {item.quantity}
                                            </TableCell>
                                            <TableCell align="right">
                                                {item.price}
                                            </TableCell>
                                            <TableCell align="right">
                                                {item.quantity * item.price}
                                            </TableCell>
                                            <TableCell align="right">
                                                {!billDetail.status && (
                                                    <IconButton
                                                        color="error"
                                                        variant="contained"
                                                        onClick={handleClearMenuItem(
                                                            item.menuId
                                                        )}
                                                    >
                                                        <ClearIcon></ClearIcon>
                                                    </IconButton>
                                                )}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Box marginTop={2}>
                            <Typography align="left">
                                {`Subtotal: ${billDetail.totalPrice} $ 
                            (${billDetail.items.reduce((prevValue, item) => {
                                return prevValue + item.quantity;
                            }, 0)} items)`}
                            </Typography>
                            <Typography
                                sx={{ fontWeight: 'bold' }}
                                variant="h5"
                                align="left"
                            >
                                {`Total: ${billDetail.totalPrice} $`}
                            </Typography>
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        {!billDetail.status && (
                            <Button
                                variant="contained"
                                onClick={handleMaskAsPaid}
                            >
                                Mask as paid
                            </Button>
                        )}
                    </DialogActions>
                </Dialog>
                <Snackbar
                    open={isDone}
                    autoHideDuration={6000}
                    onClose={handleAlertClose}
                >
                    <Alert
                        onClose={handleAlertClose}
                        severity="success"
                        sx={{ width: '100%' }}
                    >
                        Updated successfully
                    </Alert>
                </Snackbar>
            </>
        );
    } else {
        return <></>;
    }
};

export default BillDetail;

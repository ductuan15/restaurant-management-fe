import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import {
    Typography,
    Box,
    DialogContent,
    DialogContentText,
    TextField,
    Button,
    IconButton,
    Link,
    FormControl,
    Select,
    MenuItem,
    FormHelperText,
    Snackbar,
    Alert,
} from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import {
    createBillThunk,
    fetchNotPaidBillsThunk,
    selectBill,
} from '../../bill/billSlice';
import { useDispatch, useSelector } from 'react-redux';

const MenuOrder = ({ isOpen, onClose, menuItem }) => {
    const { notPaidBills } = useSelector(selectBill);
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1);
    const [selectedBillId, setSelectedBillId] = useState(0);
    const [isDone, setIsDone] = useState(false);

    const handleAlertClose = (event, reason) => {
        setIsDone(false);
    };

    const handleAmountChange = (amount) => {
        return (e) => {
            setQuantity((prevAmount) => {
                if (prevAmount + amount >= 1) return prevAmount + amount;
                else return prevAmount;
            });
        };
    };

    const handleOnClose = (e) => {
        onClose();
        setQuantity(0);
    };

    const handleOnSelectBill = (e) => {
        setSelectedBillId(e.target.value);
    };

    useEffect(() => {
        if (isOpen) {
            dispatch(fetchNotPaidBillsThunk());
        }
    }, [isOpen]);

    const handleAddToCart = (e) => {
        const menuItemOrders = [
            {
                menuId: menuItem.id,
                quantity: quantity,
            },
        ];
        (async () => {
            await dispatch(
                createBillThunk({ menuItemOrders, billId: selectedBillId })
            ).unwrap();
            setIsDone(true);
        })();
    };
    return (
        <>
            <Dialog
                maxWidth={'sm'}
                fullWidth
                onClose={handleOnClose}
                open={isOpen}
            >
                <DialogTitle>
                    <Box>
                        <Typography sx={{ fontWeight: 'bold' }} variant="h5">
                            {menuItem.name}
                        </Typography>
                        <Typography variant="h5">{menuItem.price} $</Typography>
                        <IconButton
                            href={`/menu/${menuItem.id}`}
                            component="button"
                            sx={{
                                position: 'absolute',
                                right: 10,
                                top: 10,
                                color: (theme) => theme.palette.primary['main'],
                            }}
                        >
                            <EditIcon></EditIcon>
                        </IconButton>
                    </Box>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {menuItem.description}
                    </DialogContentText>
                    <TextField
                        id="filled-textarea"
                        label="Note"
                        placeholder="Customer's note about this dish"
                        multiline
                        variant="filled"
                        margin="normal"
                        fullWidth
                    />
                    <FormControl fullWidth>
                        <Select
                            displayEmpty
                            onChange={handleOnSelectBill}
                            value={selectedBillId}
                        >
                            <MenuItem value={0}>Add in new bill</MenuItem>
                            {notPaidBills.map((bill) => {
                                return (
                                    <MenuItem value={bill.id}>{`Id: ${
                                        bill.id
                                    } • Total price: ${
                                        bill.totalPrice
                                    }$ • Date: ${new Date(
                                        bill.datetime
                                    ).toLocaleString()}`}</MenuItem>
                                );
                            })}
                        </Select>
                        <FormHelperText>Choose bill to add</FormHelperText>
                    </FormControl>
                    <Box
                        mt={2}
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box sx={{ display: 'flex' }}>
                            <Button
                                variant="contained"
                                size="large"
                                onClick={handleAmountChange(-1)}
                            >
                                -
                            </Button>
                            <Typography sx={{ marginX: 2 }} variant="h5">
                                {quantity}
                            </Typography>
                            <Button
                                variant="contained"
                                size="large"
                                onClick={handleAmountChange(1)}
                            >
                                +
                            </Button>
                        </Box>
                        <Box>
                            <Button
                                size="large"
                                variant="contained"
                                onClick={handleAddToCart}
                            >
                                Add • {menuItem.price * quantity} $
                            </Button>
                        </Box>
                    </Box>
                </DialogContent>
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
                    Added successfully
                </Alert>
            </Snackbar>
        </>
    );
};

export default MenuOrder;

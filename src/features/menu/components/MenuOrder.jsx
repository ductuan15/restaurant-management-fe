import React, { useState } from 'react';
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
} from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import { redirect } from 'react-router-dom';

const MenuOrder = ({ isOpen, onClose, menuItem }) => {
    const [amount, setAmount] = useState(0);

    const handleAmountChange = (amount) => {
        return (e) => {
            setAmount((prevAmount) => {
                return prevAmount + amount;
            });
        };
    };

    const handleOnClose = (e) => {
        onClose();
        setAmount(0);
    };

    const handleAddToCart = (e) => {};
    return (
        <Dialog maxWidth={'sm'} fullWidth onClose={handleOnClose} open={isOpen}>
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
                <DialogContentText>{menuItem.description}</DialogContentText>
                <TextField
                    id="filled-textarea"
                    label="Note"
                    placeholder="Customer's note about this dish"
                    multiline
                    variant="filled"
                    margin="dense"
                    fullWidth
                />
                <Box
                    mt={2}
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    <Box sx={{ display: 'flex' }}>
                        <Button
                            variant="contained"
                            size="large"
                            onClick={handleAmountChange(1)}
                        >
                            +
                        </Button>
                        <Typography size>{amount}</Typography>
                        <Button
                            variant="contained"
                            size="large"
                            onClick={handleAmountChange(-1)}
                        >
                            -
                        </Button>
                    </Box>
                    <Box>
                        <Button
                            size="large"
                            variant="contained"
                            onClick={handleAddToCart}
                        >
                            Add • {menuItem.price * amount} $
                        </Button>
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default MenuOrder;

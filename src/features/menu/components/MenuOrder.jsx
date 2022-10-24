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
} from '@mui/material';

const MenuOrder = ({ isOpen, onClose, menuItem }) => {
    const [amount, setAmount] = useState(0);

    const handleAmountChange = (amount) => {
        return (e) => {
            setAmount((prevAmount) => {
                return prevAmount + amount;
            });
        };
    };

    const handleAddToCart = (e) => {};
    return (
        <Dialog maxWidth={'sm'} fullWidth onClose={onClose} open={isOpen}>
            <DialogTitle>
                <Box>
                    <Typography sx={{ fontWeight: 'bold' }} variant="h5">
                        {menuItem.name}
                    </Typography>
                    <Typography variant="h5">{menuItem.price} $</Typography>
                </Box>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>{menuItem.description}</DialogContentText>
                <TextField
                    id="filled-textarea"
                    label="Note"
                    placeholder="note"
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

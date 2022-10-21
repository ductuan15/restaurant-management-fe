import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import {
    Typography,
    Box,
    DialogContent,
    DialogContentText,
    TextField,
} from '@mui/material';
import { Image } from '@mui/icons-material';

const MenuDetail = ({ isOpen, onClose, menuItem }) => {
    return (
        <Dialog sx={'lg'} fullWidth="true" onClose={onClose} open={isOpen}>
            <DialogTitle>
                <Box>
                    <Box>
                        <img src={menuItem.image}></img>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Typography sx={{ fontWeight: 'bold' }} variant="h5">
                            {menuItem.name}
                        </Typography>
                        <Typography variant="h5">{menuItem.price} $</Typography>
                    </Box>
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
            </DialogContent>
        </Dialog>
    );
};

export default MenuDetail;

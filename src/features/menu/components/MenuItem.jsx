import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    CardActions,
    IconButton,
} from '@mui/material';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import MenuOrder from './MenuOrder';
import EditIcon from '@mui/icons-material/Edit';

const MenuItem = ({ menuItem }) => {
    const [isDetailOpen, setDetailOpen] = useState(false);

    const handleOnDetailClose = () => {
        setDetailOpen(false);
    };

    const handleOnOpenDetail = () => {
        setDetailOpen(true);
    };
    return (
        <>
            <Card>
                <CardActionArea onClick={handleOnOpenDetail}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={menuItem.image}
                    ></CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            {menuItem.name}
                        </Typography>
                        <Typography
                            gutterBottom
                            variant="subtitle1"
                            component="div"
                        >
                            {menuItem.price} $
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <MenuOrder
                isOpen={isDetailOpen}
                onClose={handleOnDetailClose}
                menuItem={menuItem}
            ></MenuOrder>
        </>
    );
};

export default MenuItem;

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
import { ThemePalette } from '../../../app/theme';

const MenuItem = ({ menuItem, onOpenOrder }) => {
    return (
        <>
            <Card>
                <CardActionArea onClick={onOpenOrder(menuItem)}>
                    <CardMedia
                        component="img"
                        height="280"
                        image={
                            menuItem.image
                                ? menuItem.image
                                : 'https://placeholder.pics/svg/500x280'
                        }
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
        </>
    );
};

export default MenuItem;

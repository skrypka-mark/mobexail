import React from 'react';
import { Box, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { CATEGORY_ROUTE } from '../../router/routes';
import useStyles from './styles';

const DefaultItem = ({
    data: {
        id,
        title,
        link = '#',
        image
    }
}) => {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <CardActionArea className={classes.cardActionArea} disableRipple component={RouterLink} to={link}>
                <CardMedia
                    component='img'
                    height='140'
                    image={image}
                    alt={title}
                />
                <CardContent className={classes.cardContent}>
                    <Typography className={classes.cardTitle} gutterBottom variant='h7' component='span'>
                        { title }
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Box>
    );
};

DefaultItem.defaultProps = {
    data: {
        id: '0',
        title: '',
        link: '#',
        image: ''
    }
};

export default DefaultItem;
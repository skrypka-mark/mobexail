import { Box, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { PRODUCT_ROUTE } from '../../router/routes';
import useStyles from './styles';

const DetailedItem = ({
    data: {
        id,
        title,
        link,
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

export default DetailedItem;
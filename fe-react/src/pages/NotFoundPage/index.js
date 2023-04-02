import { Box } from '@mui/material';
import NotFoundIcon from '../../svg/404-not-found.svg';
import useStyles from './styles';

const NotFoundPage = () => {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <Box className={classes.icon} component='img' src={NotFoundIcon} />
        </Box>
    );
};

export default NotFoundPage;
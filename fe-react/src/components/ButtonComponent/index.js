import { Box, Button } from '@mui/material';
import useStyles from './styles';

const ButtonComponent = props => {
    const classes = useStyles();
    const { title } = props;
    return (
        <Box className={classes.container}>
            <Button { ...props }>
                { title }
            </Button>
        </Box>
    );
};

export default ButtonComponent;
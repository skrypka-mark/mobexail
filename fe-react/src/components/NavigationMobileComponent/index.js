import { Box, Link, Grid } from '@mui/material';
import { KeyboardArrowRight } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import useStyles from './styles';

const NavigationMobileComponent = ({ data: { title, link } }) => {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <Grid container>
                <Grid item>
                    <KeyboardArrowRight className={classes.icon} />
                </Grid>
                <Grid item>
                    <Link underline='always' component={RouterLink} to={link}>
                        { title }
                    </Link>
                </Grid>
            </Grid>
        </Box>
    );
};

export default NavigationMobileComponent;
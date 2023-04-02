import { Box, Grid, Link, Typography } from '@mui/material';
import { KeyboardArrowRight, Home } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { nanoid } from 'nanoid';
import useStyles from './styles';

const NavigationComponent = ({ data }) => {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <Grid container spacing={1}>
                {
                    data.map((item, index) => (
                        <Grid item key={nanoid()}>
                            <Grid container className={classes.gridContainer} spacing={1}>
                                { !index && <Home className={classes.icon} /> }
                                {
                                    data.length - 1 === index
                                        ? (
                                            <Typography
                                                className={classes.text}
                                                sx={{ fontWeight: 'bold' }}
                                            >
                                                { item?.title }
                                            </Typography>
                                        )
                                        : (
                                            <Link
                                                className={classes.text}
                                                underline='hover'
                                                component={RouterLink}
                                                to={item?.link}
                                            >
                                                { item?.title }
                                            </Link>
                                        )
                                }
                                { index !== data.length - 1 && <KeyboardArrowRight className={classes.icon} /> }
                            </Grid>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
};

export default NavigationComponent;
import { Zoom, Box, Fab, useScrollTrigger } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import PropTypes from 'prop-types';
import useStyles from './styles';

const ScrollToTop = ({ window }) => {
    const classes = useStyles();
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100
    });
    const clickHandler = event => {
        const anchor = (event.target.ownerDocument || document).querySelector('#scroll-to-top-anchor')
        if(anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    };
    return (
        <Zoom in={trigger}>
            <Box
                className={classes.box}
                onClick={clickHandler}
                role='presentation'
            >
                <Fab className={classes.fab} size='small' aria-label='Scroll back to top'>
                    <KeyboardArrowUp />
                </Fab>
            </Box>
        </Zoom>
    );
};

ScrollToTop.propTypes = {
    window: PropTypes.func.isRequired
};

export default ScrollToTop;
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    container: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
        padding: 20
    },
    gridContainer: {
        alignItems: 'center'
    },
    text: {
        color: 'inherit',
        fontSize: theme.typography.pxToRem(13)
    },
    icon: {
        fontSize: 'medium',
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1)
    }
}));

export default useStyles;
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    container: {
        paddingBottom: theme.spacing(1)
    },
    leftContainer: {
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
        position: 'relative'
    },
    catalogButton: {
        [theme.breakpoints.up('md')]: {
            display: 'none'
        },
        boxShadow: theme.styles.primary.shadow,
        textTransform: 'none',
        fontWeight: 'bold',
        fontSize: theme.typography.pxToRem(13),
        color: theme.palette.primary.darkGray,
        marginBottom: theme.spacing(1)
    }
}));

export default useStyles;
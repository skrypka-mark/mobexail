import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    container: {
        [theme.breakpoints.up('sm')]: {
            '&:hover': {
                boxShadow: theme.styles.secondary.shadow,
                transform: 'translateY(-3px)'
            }
        },
        height: '100%',
        overflow: 'hidden',
        borderRadius: theme.styles.primary.borderRadius,
        transition: '0.2s',
        boxShadow: theme.styles.primary.shadow
    },
    cardActionArea: {
        height: '100%',
        textDecoration: 'none',
        color: 'inherit'
    },
    cardContent: {
        textAlign: 'center'
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: theme.typography.pxToRem(13)
    }
}));

export default useStyles;
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    container: {
        marginBottom: theme.spacing(3)
    },
    listItemContainer: {
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(1)
    },
    title: {
        fontSize: theme.typography.pxToRem(18),
        fontWeight: 'bold'
    },
    subTitle: {
        display: 'block',
        fontSize: theme.typography.pxToRem(13),
        paddingTop: theme.spacing(0.5),
        paddingBottom: theme.spacing(0.5),
        whiteSpace: 'pre-line',
        '&.MuiLink-underlineAlways': {
            textDecoration: 'underline'
        },
        '&.MuiLink-underlineAlways:hover': {
            textDecoration: 'none'
        }
    },
    icon: {
        width: 20,
        marginRight: theme.spacing(1)
    }
}));

export default useStyles;
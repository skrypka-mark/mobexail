import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    container: {},
    tabsContainer: {
        backgroundColor: theme.palette.primary.gray,
        borderRadius: theme.styles.primary.borderRadius,
        overflow: 'hidden'
    },
    tabs: {
        '& .MuiTabs-indicator': {
            backgroundColor: theme.palette.primary.purple
        }
    },
    tab: {
        [theme.breakpoints.up('sm')]: {
            '&:hover': {
                backgroundColor: theme.palette.action.hover
            }
        },
        textTransform: 'none',
        fontWeight: 'normal',
        fontSize: theme.typography.pxToRem(13),
        color: theme.palette.text.primary,
        transition: '.2s',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    tabSelected: {
        fontWeight: 'bold'
    },
    badge: {
        backgroundColor: theme.palette.primary.darkBlue,
        fontSize: theme.typography.pxToRem(11),
        fontWeight: 'bold',
        color: theme.palette.primary.gray,
        borderRadius: theme.styles.primary.borderRadius,
        padding: 3,
        paddingTop: 1,
        paddingBottom: 1,
        marginLeft: theme.spacing(0.5)
    },
    catalogButtonContainer: {
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },
    catalogButton: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        paddingLeft: 15,
        textTransform: 'none',
        fontWeight: 'bold',
        fontSize: theme.typography.pxToRem(13),
        color: 'white',
        backgroundColor: theme.palette.primary.purple,
        borderRadius: 0,
        transition: '.2s',
        paddingRight: 20,
        '&:hover': {
            opacity: 0.9,
            backgroundColor: theme.palette.primary.purple
        }
    },
    leftContainer: {
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
        position: 'relative'
    }
}));

export default useStyles;
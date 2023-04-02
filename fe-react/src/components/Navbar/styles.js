import { alpha } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    container: {},
    toolbar: {
        backgroundColor: 'black',
        display: 'flex'
    },
    title: {
        fontWeight: 'bold',
        color: 'inherit',
        textDecoration: 'inherit'
    },
    menuIcon: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'flex'
        }
    },
    tabsContainer: {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: theme.spacing(4),
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    separator: {
        width: 1,
        height: '3vh',
        backgroundColor: 'gray',
        alignSelf: 'center'
    },
    tabs: {
        '& .MuiTabs-indicator': {
            backgroundColor: theme.palette.primary.purple
        }
    },
    tab: {
        textTransform: 'none',
        fontWeight: 'normal',
        fontSize: theme.typography.pxToRem(13),
        transition: '.2s',
        color: theme.palette.primary.gray,
        '&.Mui-focusVisible': {
            backgroundColor: 'rgba(100, 95, 228, 0.32)'
        },
        '&:hover': {
            backgroundColor: 'rgba(100, 95, 228, 0.32)'
        },
        '&.Mui-selected': {
            color: theme.palette.primary.white
        }
    },
    tabSelected: {
        fontWeight: 'bold'
    },
    profileMenuButton: {
        marginLeft: 'auto'
    },
    avatarIcon: {
        width: 32,
        height: 32
    },
    languageButtonContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    languageButton: {
        padding: -100
    },
    searchContainer: {
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
        width: '100%',
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        transition: '.2s',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        }
    },
    searchIconWrapper: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    styledInputBase: {
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                }
            },
        }
    }
}));

export default useStyles;
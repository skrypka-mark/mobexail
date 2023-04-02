import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: theme.palette.primary.gray
    },
    gridContainer: {
        justifyContent: 'space-between',
        marginTop: 0
    },
    sectionTitleContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    arrowIcon: {
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        },
        transition: '.2s',
        fontSize: 'medium',
        marginLeft: 'auto'
    },
    topFooterContainer: {
        paddingBottom: theme.spacing(5)
    },
    bottomFooter: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: theme.palette.action.disabledBackground,
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2)
    },
    bottomFooterLeftText: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: theme.typography.pxToRem(13)
    }
}));

export default useStyles;

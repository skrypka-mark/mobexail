import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    container: {},
    text: {
        '& .MuiListItemText-primary': {
            fontSize: 13,
            color: 'inherit',
            textDecoration: 'inherit'
        }
    },
    itemContainer: {
        padding: 5,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: theme.styles.primary.borderRadius
    },
    dropdownList: {
        position: 'absolute',
        width: '100%',
        backgroundColor: 'white',
        boxShadow: theme.styles.primary.shadow,
        borderRadius: theme.styles.primary.borderRadius,
        borderLeft: '1px solid',
        borderLeftColor: theme.palette.primary.purple,
        zIndex: 1
    },
    dropdown: {
        position: 'relative'
    },
    dropdownInner: {
        left: '100%',
        top: 0
    }
}));

export default useStyles;
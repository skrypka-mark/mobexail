import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    container: {
        // position: 'absolute',
    },
    text: {
        '& .MuiListItemText-primary': {
            fontSize: 13,
            color: 'inherit',
            textDecoration: 'inherit'
        }
    },
    listContainer: {
        boxShadow: theme.styles.primary.shadow,
        borderRadius: theme.styles.primary.borderRadius,
        backgroundColor: 'white',
        border: '1px solid black'
    },
    itemContainer: {
        borderLeft: '2px solid #635ee7',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor: 'white',
        justifyContent: 'space-between'
    }
}));

export default useStyles;
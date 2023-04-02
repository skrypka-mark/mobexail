import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    container: {
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        },
        backgroundColor: theme.palette.primary.gray,
        padding: 10
    }
}));

export default useStyles;
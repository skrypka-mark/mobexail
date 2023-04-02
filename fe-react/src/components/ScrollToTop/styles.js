import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    box: {
        position: 'fixed',
        bottom: 16,
        right: 16
    },
    fab: {
        backgroundColor: 'black',
        color: 'white',
        '&:hover': {
            backgroundColor: 'white',
            color: 'black'
        }
    }
});

export default useStyles;
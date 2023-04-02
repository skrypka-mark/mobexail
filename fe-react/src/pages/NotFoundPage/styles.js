import { makeStyles } from '@mui/styles';
import { theme } from '../../theme';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(10)
    },
    icon: {
        height: '50vh'
    }
});

export default useStyles;
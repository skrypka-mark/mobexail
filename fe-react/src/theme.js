import { createTheme } from '@mui/material';

const mode = 'light';

export const theme = createTheme({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                primary: {
                    main: '#000000',
                    white: 'white',
                    gray: '#f5f5f5',
                    darkGray: '#323131',
                    purple: '#635ee7',
                    darkBlue: '#404d58'
                }
            }
            : {
                primary: {
                    main: '#000000',
                    white: 'white',
                    gray: '#000000',
                    darkGray: '#323131',
                    purple: '#635ee7'
                }
            }
        )
    },
    styles: {
        primary: {
            shadow: '0px 0px 8px 0px rgba(34, 60, 80, 0.2)',
            borderRadius: 5
        },
        secondary: {
            shadow: '0px 0px 23px 3px rgba(34, 60, 80, 0.2)'
        }
    }
});
import { Box, Drawer, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

const DrawerComponent = ({ open, toggleDrawer, children }) => {
    return (
        <Drawer
            anchor='left'
            open={open}
            onClose={toggleDrawer(false)}
        >
            <Box
                sx={{ color: 'gray', fontSize: 25, padding: 2, alignSelf: 'flex-end' }}
                component='div'
                onClick={toggleDrawer(false)}
            >
                <IconButton>
                    <Close />
                </IconButton>
            </Box>
            { children }
        </Drawer>
    );
};

export default DrawerComponent;
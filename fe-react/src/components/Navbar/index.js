import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router';
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    Slide,
    Tabs,
    Tab,
    IconButton,
    Tooltip,
    Divider,
    Menu,
    MenuItem,
    Avatar,
    ListItemIcon,
    List,
    ListItem,
    ListItemText,
    useScrollTrigger,
    Button,
    InputBase
} from '@mui/material';
import {
    Menu as MenuIcon,
    PersonAdd,
    Settings,
    Logout,
    Search as SearchIcon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import DrawerComponent from '../DrawerComponent';
import { nanoid } from 'nanoid';
import i18n from '../../locale';
import { HOME_ROUTE } from '../../router/routes';
import { tabTitles } from '../../constants/tabTitles';
import useStyles from './styles';

const Navbar = ({ window }) => {
    const classes = useStyles();
    const { pathname } = useLocation();
    const trigger = useScrollTrigger({
        target: window ? window() : undefined
    });
    const { width } = useWindowDimensions();
    const [tab, setTab] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const isProfileMenuOpen = useMemo(() => Boolean(anchorEl), [anchorEl]);
    const toolbarVariant = useMemo(() => width < 600 ? 'regular' : 'dense', [width]);
    const profileMenuClickHandler = event => setAnchorEl(event.currentTarget);
    const profileMenuCloseHandler = () => setAnchorEl(null);
    const menuClickHandler = () => setIsMenuOpened(true);
    const [indicatorVisible, setIndicatorVisible] = useState(false);
    const tabLinks = tabTitles.map(item => item.link);
    useEffect(() => {
        if(!tabLinks.includes(pathname)) setIndicatorVisible(false);
        else {
            const tabId = tabLinks.indexOf(pathname);
            setIndicatorVisible(true);
            setTab(tabId);
        }
    }, [pathname, tabLinks]);
    const tabChangeHandler = (_, newTab) => {
        setTab(newTab);
        !indicatorVisible && setIndicatorVisible(true);
    };
    const toggleDrawer = open => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
        setIsMenuOpened(open);
    };
    const MenuList = () => (
        <Box
            role='presentation'
            // onKeyDown={toggleDrawer(false)}
            sx={{ width: 250 }}
        >
            <List sx={{ p: 3 }}>
                {
                    tabTitles.map(({ title }, index) => (
                        <React.Fragment key={nanoid()}>
                            <ListItem sx={{ py: 0, px: 1 }} onClick={toggleDrawer(false)}>
                                <ListItemText secondary={title} />
                            </ListItem>
                            { index === tabTitles.length - 1 ? null : <Divider /> }
                        </React.Fragment>
                    ))
                }
                <Box sx={{ '& button': { m: 1 } }} className={classes.languageButtonContainer}>
                    <Button className={classes.languageButton} variant='outlined' onClick={toggleDrawer(false)}>
                        RU
                    </Button>
                    <Button className={classes.languageButton} variant='outlined' onClick={toggleDrawer(false)}>
                        UA
                    </Button>
                </Box>
            </List>
        </Box>
    );

    return (
        <Box className={classes.container}>
            <Slide appear={false} direction='down' in={!trigger}>
                <AppBar position='fixed'>
                    <Toolbar className={classes.toolbar} variant={toolbarVariant}>
                        <IconButton edge='start' color='inherit' className={classes.menuIcon} onClick={menuClickHandler}>
                            <MenuIcon fontSize='large' />
                        </IconButton>
                        <Typography
                            className={classes.title}
                            variant={width < 600 ? 'h5' : 'inherit'}
                            component={Link}
                            to={HOME_ROUTE}
                            onClick={() => setTab(null)}
                        >
                            { i18n.t('appBar.title') }
                        </Typography>
                        {/* <Divider orientation='vertical' sx={{ backgroundColor: 'white', color: 'white' }} /> */}
                        <Box className={classes.tabsContainer}>
                            <Box className={classes.separator} />
                            <Tabs
                                className={classes.tabs}
                                value={tab}
                                onChange={tabChangeHandler}
                                TabIndicatorProps={{ style: { opacity: Number(indicatorVisible) } }}
                            >
                                {
                                    tabTitles.map(({ title, link }, index) => (
                                        <Tab
                                            key={nanoid()}
                                            className={`${classes.tab} ${(indicatorVisible && tab === index) ? classes.tabSelected : ''}`}
                                            disableRipple
                                            label={title}
                                            to={link}
                                            LinkComponent={Link}
                                        />
                                    ))
                                }
                            </Tabs>
                        </Box>
                        <Box className={classes.searchContainer}>
                            <Box className={classes.searchIconWrapper}>
                                <SearchIcon />
                            </Box>
                            <InputBase className={classes.styledInputBase}
                                placeholder='Search...'
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Box>
                        <Tooltip className={classes.profileMenuButton} title='Account settings'>
                            <IconButton onClick={profileMenuClickHandler} size='small'>
                                <Avatar className={classes.avatarIcon}>M</Avatar>
                            </IconButton>
                        </Tooltip>
                    </Toolbar>
                    <Menu
                        anchorEl={anchorEl}
                        open={isProfileMenuOpen}
                        onClick={profileMenuCloseHandler}
                        onClose={profileMenuCloseHandler}
                    >
                        <MenuItem>
                            <Avatar /> Profile
                        </MenuItem>
                        <Divider />
                        <MenuItem>
                            <ListItemIcon>
                                <PersonAdd fontSize='small' />
                            </ListItemIcon>
                            Add another account
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <Settings fontSize='small' />
                            </ListItemIcon>
                            Settings
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <Logout fontSize='small' />
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </Menu>
                </AppBar>
            </Slide>
            <DrawerComponent open={isMenuOpened} toggleDrawer={toggleDrawer}>
                <MenuList />
            </DrawerComponent>
            <Toolbar variant={toolbarVariant} />
        </Box>
    );
};

export default Navbar;
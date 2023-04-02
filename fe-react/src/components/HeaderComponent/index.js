import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Container, Box, Toolbar, Tabs, Tab, Grid, Fade, Button } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import LeftMenu from '../LeftMenu';
import { nanoid } from 'nanoid';
import useStyles from './styles';

const HeaderComponent = ({ data, catalog }) => {
    const classes = useStyles();
    const { pathname } = useLocation();
    const [tab, setTab] = useState(null);
    const categoryMenuOpenLocalStorage = localStorage.getItem('CATEGORY_MENU_OPEN');
    const [categoryMenuOpen, setCategoryMenuOpen] = useState(JSON.parse(categoryMenuOpenLocalStorage));
    const [indicatorVisible, setIndicatorVisible] = useState(false);
    const tabLinks = data.map(item => item.link);
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
    const categoryButtonClickHandler = () => {
        setCategoryMenuOpen(state => {
            localStorage.setItem('CATEGORY_MENU_OPEN', !state);
            return !state;
        });
    };
    return (
        <Container className={classes.container} maxWidth='lg' disableGutters>
            <Box className={classes.tabsContainer}>
                <Grid container spacing={1}>
                    <Grid item md={3} lg={3} className={classes.catalogButtonContainer}>
                        <Button
                            className={classes.catalogButton}
                            startIcon={<MenuIcon fontSize='medium' />}
                            onClick={categoryButtonClickHandler}
                            disableRipple
                        >
                            Каталог товаров
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={9} lg={9}>
                        <Toolbar variant='dense' disableGutters>
                            <Tabs
                                className={classes.tabs}
                                value={tab}
                                onChange={tabChangeHandler}
                                variant='scrollable'
                                TabIndicatorProps={{ style: { opacity: Number(indicatorVisible) } }}
                                scrollButtons={false}
                            >
                                {
                                    data.map(({ title, link, amount }, index) => (
                                        <Tab
                                            key={nanoid()}
                                            className={`${classes.tab} ${(indicatorVisible && tab === index) ? classes.tabSelected : ''}`}
                                            label={
                                                <>
                                                    { title }
                                                    <Box className={classes.badge}>
                                                        { amount }
                                                    </Box>
                                                </>
                                            }
                                            disableRipple
                                            wrapped={true}
                                            to={link}
                                            LinkComponent={Link}
                                        />
                                    ))
                                }
                            </Tabs>
                        </Toolbar>
                    </Grid>
                </Grid>
            </Box>
            <Grid item xs={0} sm={0} md={3} lg={3} pr={1} pt={1}>
                <Fade in={categoryMenuOpen} timeout={200} unmountOnExit>
                    <Box className={classes.leftContainer}>
                        <LeftMenu data={catalog} />
                    </Box>
                </Fade>
            </Grid>
        </Container>
    );
};

export default HeaderComponent;
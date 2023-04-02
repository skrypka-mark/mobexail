import React, { useState } from 'react';
import { Box, List, ListItemText, Grid, ListItemButton, Collapse } from '@mui/material';
import { ExpandLess } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import DrawerComponent from '../DrawerComponent';
import { nanoid } from 'nanoid';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import useStyles from './styles';

const ProductsCatalogMobile = ({ data, open, setOpen }) => {
    const width = useWindowDimensions();
    const classes = useStyles();
    const toggleDrawer = open => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
        setOpen(open);
    };
    const Item = ({ item }) => {
        const [open, setOpen] = useState(false);
        const clickHandler = () => {
            if(item?.options?.length) return setOpen(state => !state);
        };
        const mouseEnterHandler = () => setOpen(true);
        const mouseLeaveHandler = () => setOpen(false);
        return (
            <>
                    <ListItemButton
                        className={classes.itemContainer}
                        onClick={clickHandler}
                        onMouseEnter={mouseEnterHandler}
                        onMouseLeave={mouseLeaveHandler}
                        disableTouchRipple
                        sx={{ p: 1 }}
                    >
                        <Grid container>
                            <Grid item xs={6} sm={6}>
                                <ListItemText
                                    primary={item.title}
                                    className={classes.text}
                                    primaryTypographyProps={{
                                        variant: 'h6',
                                        component: Link,
                                        to: item.link,
                                        fontWeight: open ? 'bold' : 'normal'
                                    }}
                                />
                            </Grid>
                            {
                                item?.options?.length && (
                                    <Grid item xs={6} sm={6} sx={{ display: 'flex' }}>
                                        <ExpandLess
                                            sx={{
                                                transform: open ? 'rotate(0deg)' : 'rotate(180deg)',
                                                transition: '.2s',
                                                fontSize: 'medium',
                                                alignSelf: 'center',
                                                marginLeft: 'auto'
                                            }}
                                        />
                                    </Grid>
                                )
                            }
                        </Grid>
                    </ListItemButton>
                {
                    item?.options?.length && (
                            <Box sx={{ ml: 1 }}>
                                <Collapse in={open} timeout={200} unmountOnExit>
                                    <List
                                        component='div'
                                        onMouseEnter={mouseEnterHandler}
                                        onMouseLeave={mouseLeaveHandler}
                                        disablePadding
                                    >
                                        { item?.options?.length && item?.options.map(option => <Item key={nanoid()} item={option} />) }
                                    </List>
                                </Collapse>
                            </Box>
                    )
                }
            </>
        );
    };
    const MenuList = () => {
        return (
            <Box
                role='presentation'
                // onKeyDown={toggleDrawer(false)}
                sx={{ width }}
            >
                <List sx={{ p: 3 }}>
                    <Box className={classes.container}>
                        <List component='div' disablePadding>
                            { data.map(item => <Item key={nanoid()} item={item} />) }
                        </List>
                    </Box>
                </List>
            </Box>
        );
    };
    return (
        <DrawerComponent open={open} toggleDrawer={toggleDrawer}>
            <MenuList />
        </DrawerComponent>
    );
};

export default ProductsCatalogMobile;
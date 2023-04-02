import React, { useState } from 'react';
import { Box, ListItemButton, ListItemText, Grow, Backdrop } from '@mui/material';
import { ExpandLess } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { useTheme } from '@mui/material';
import useStyles from './styles';
import { CATEGORY_ROUTE } from '../../router/routes';

const LeftMenu = ({ data }) => {
    const classes = useStyles();
    const theme = useTheme();
    // const [backdropOpen, setBackdropOpen] = useState(false);
    // const backdropToggleHandler = open => setBackdropOpen(open);
    const ItemButton = ({ item, hasInner, open }) => {
        return (
            <ListItemButton
                className={classes.itemContainer}
                disableTouchRipple
                sx={{ backgroundColor: open ? theme.palette.action.hover : 'transparent' }}
            >
                <ListItemText
                    primary={item.title}
                    className={classes.text}
                    primaryTypographyProps={{
                        variant: 'h6',
                        component: Link,
                        to: `${CATEGORY_ROUTE}${item.link}`,
                        fontWeight: open ? 'bold' : 'normal'
                    }}
                />
                {
                    hasInner && (
                        <ExpandLess
                            sx={{
                                transition: '.2s',
                                transform: open ? 'rotate(90deg)' : 'rotate(180deg)',
                                fontSize: 'medium'
                            }}
                        />
                    )
                }
            </ListItemButton>
        );
    };
    const Item = ({ item, hasInner }) => {
        const [open, setOpen] = useState(false);
        return (
            <Box
                className={classes.dropdown}
                onPointerOver={() => setOpen(true)}
                onPointerLeave={() => setOpen(false)}
            >
                <ItemButton item={item} hasInner={hasInner} open={open} />
                <Grow in={open} timeout={200} unmountOnExit>
                    <Box className={`${classes.dropdownList} ${classes.dropdownInner}`}>
                        <List data={item.options} />
                    </Box>
                </Grow>
            </Box>
        );
    };
    const List = ({ data }) => (
        <Box className={classes.dropdownList}>
            {
                data.map(item => {
                    const hasInner = !!item?.options?.length;
                    return (
                        hasInner
                            ? <Item key={nanoid()} item={item} hasInner={hasInner} />
                            : <ItemButton key={nanoid()} item={item} hasInner={hasInner} />
                    );
                })
            }
        </Box>
    );
    return (
        <Box
            className={classes.container}
            component='div'
            // onMouseOver={() => backdropToggleHandler(true)}
            // onMouseLeave={() => backdropToggleHandler(false)}
        >
            <List data={data} />
            {/* <Backdrop open={backdropOpen} onClick={() => backdropToggleHandler(false)} /> */}
        </Box>
    );
};

export default LeftMenu;
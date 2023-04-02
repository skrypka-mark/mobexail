import { useEffect, useState } from 'react';
import { Container, Box, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory } from '../../redux/actions/category';
import { categorySelector } from '../../redux/selectors/category';
import GridDetailedList from '../../components/GridDetailedList';
import GridList from '../../components/GridList';
import ScrollToTop from '../../components/ScrollToTop';
import useStyles from './styles';

const CategoryPage = ({ id }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategory(id));
    }, [id]);
    const category = useSelector(categorySelector);
    return (
        <Container className={classes.container} maxWidth='lg' disableGutters>
            <Box id='scroll-to-top-anchor' />
            <Grid container>
                <Grid item xs={0} sm={0} md={3} lg={3} />
                <Grid item xs={12} sm={12} md={9} lg={9}>
                    {
                        category?.products?.length
                            ? <GridDetailedList data={category?.products} />
                            : <GridList data={category?.categories} />
                    }
                </Grid>
            </Grid>
            <ScrollToTop />
        </Container>
    );
};

export default CategoryPage;
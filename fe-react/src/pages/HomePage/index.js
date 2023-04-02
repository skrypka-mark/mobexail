import React, { useState } from 'react';
import { Container, Grid, Box, Button } from '@mui/material';
import ScrollToTop from '../../components/ScrollToTop';
import GridList from '../../components/GridList';
import ProductsCatalogMobile from '../../components/ProductsCatalogMobile';
import useStyles from './styles';

const HomePage = ({ data, catalog }) => {
    const classes = useStyles();
    const [catalogMenuOpen, setCatalogMenuOpen] = useState(false);
    return (
        <Container className={classes.container} maxWidth='lg' disableGutters>
            <Box id='scroll-to-top-anchor' />
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12} spacing={1}>
                    <Button
                        className={classes.catalogButton}
                        onClick={setCatalogMenuOpen}
                        fullWidth
                        disableRipple
                    >
                        Каталог товаров
                    </Button>
                </Grid>
                <Grid item xs={0} sm={0} md={3} lg={3} />
                <Grid item xs={12} sm={12} md={9} lg={9}>
                    <GridList data={data} />
                </Grid>
            </Grid>
            <ScrollToTop />
            <ProductsCatalogMobile data={catalog} open={catalogMenuOpen} setOpen={setCatalogMenuOpen} />
        </Container>
    );
};

export default HomePage;
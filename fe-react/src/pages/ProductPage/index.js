import { useEffect } from 'react';
import { Container, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentProduct } from '../../redux/actions/product';
import { currentProductSelector } from '../../redux/selectors/product';
import useStyles from './styles';

const ProductPage = ({ product }) => {
    const classes = useStyles();
    return (
        <Container className={classes.container} maxWidth='lg' disableGutters>
            { product.description }
        </Container>
    );
};

export default ProductPage;
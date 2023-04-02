import { Box, Grid } from '@mui/material';
import DetailedItem from '../DetailedItem';

const GridDetailedList = ({ data }) => {
    return (
        <Box>
            <Grid container spacing={1}>
                { data?.map(item => (
                    <Grid item key={item.id} xs={6} sm={6} md={4} lg={4}>
                        <DetailedItem data={item} />
                    </Grid>
                )) }
            </Grid>
        </Box>
    );
};

export default GridDetailedList;
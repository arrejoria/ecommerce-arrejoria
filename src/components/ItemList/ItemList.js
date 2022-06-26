import {memo} from 'react';
import Item from '../Item/Item';
import { Grid, Box } from '@mui/material';

const ItemList = ({ products }) => {

    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {products.map( prod => <Item className="product-item" key={prod.id} {...prod} /> )}
        </Grid>
      </Box>
      );
    }

export default memo(ItemList);

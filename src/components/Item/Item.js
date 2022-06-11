import { Card, CardContent, CardMedia, Button, Typography, Grid } from '@mui/material'
import Counter from '../Counter/Counter';


const Item = ( {id, name, price, image, stock } ) => {

    return (

        <Grid item xs={2} sm={4} md={4} key={id}>
            <Card id={id} 
            sx={{ 
             maxWidth: 345,
             height: 'auto',
             }}>
              <CardMedia
                component="img"
                height="auto"
                image={image}
                alt={name}
              />
              <CardContent>
                <Typography  sx={{height:'100%', maxHeight: 64}} gutterBottom variant="h5" component="div">{name}</Typography>
                <Typography gutterBottom variant="h5" component="p">
                  Precio: ${price}
                </Typography>
              </CardContent>
              <Counter initial={0} stock={stock}/>
            </Card>
        </Grid>
      );
}

export default Item
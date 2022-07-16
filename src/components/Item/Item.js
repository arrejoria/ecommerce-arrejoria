import './Item.css'
import { Card, CardContent, CardMedia, Button, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
 
const Item = ( {id, name, image, stock } ) => {

    return (

        <Grid item xs={2} sm={4} md={4} key={id}>
            <Card
            sx={{ 
             maxWidth: 345,
             height: '100%',
             maxHeight: 500,
             }}>
              <CardMedia
                component="img"
                height="auto"
                image={image}
                alt={name}
              />
              <CardContent className='card__content'>
                <Typography gutterBottom variant="h5" component="h2"> {name} </Typography>
                <Typography component="p" sx={{
                    fontWeight: 600,
                    marginBottom: '1rem'
                   }} >Cantidad disponible en stock: {stock} </Typography>
                {stock > 0 && <Link to={`/detail/${id}`}> <Button variant="text" className='item__btn' sx={{background: '#111', color: '#FFF', fontWeight: 600}}>Ver Detalle</Button></Link>}
              </CardContent>
            </Card>
        </Grid>
      );
}

export default Item
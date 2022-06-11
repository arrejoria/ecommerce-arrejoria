import './Item.css'
import { Card, CardContent, CardMedia, Button, Grid } from '@mui/material'
import { Link } from 'react-router-dom';


const Item = ( {id, name, image } ) => {

    return (

        <Grid item xs={2} sm={4} md={4} key={id}>
            <Card
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
                <Link to={`/detail/${id}`}>
                  <Button variant="text" className='item__btn'
                  sx={{
                    background: '#111',
                    color: '#FFF',
                    fontWeight: 600,
                   }}>Ver Detalle</Button>
                </Link>
              </CardContent>
            </Card>
        </Grid>
      );
}

export default Item
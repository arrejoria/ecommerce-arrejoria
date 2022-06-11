import './ItemDetail.css'
// import {Grid, Box, Typography} from '@mui/material'
import Counter from '../../Counter/Counter'
const ItemDetail = ({id, name, image, price, description}) => {

    return( 
            <section className='product_detail-container'>
              <div className='product_detail-content'>
                <div className='product__image' >
                  <img src={image} alt={`Imagen del producto ${name}`} />
                </div>
                <div className='product__inner'>
                        <div className='product_description'>
                            <h3>QBRemera <span style={{color: '#111'}}>{name}</span></h3>
                            <p>Precio: ${price}</p>
                            <p>{description}</p>
                        </div>
                        <div className='add__btn'>
                            <Counter />
                        </div>
                </div>
              </div>
            </section>
    )
}

export default ItemDetail
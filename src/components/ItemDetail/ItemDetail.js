import './ItemDetail.css'
import { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../Context/CartContext';
import Cart from '../Cart/Cart'
import { Link } from 'react-router-dom';


const ItemDetail = ({id, name, image, price, description, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)


    const {addItem, isInCart} = useContext(CartContext)

    const onAddToCart = (quantity) => {
      console.log('Se agrega al carrito')
      addItem({id, name, image, price, quantity})
      setQuantityAdded(quantity)
    }

    return( 
            <section className='product__detail-container'>
              <div className='product__detail-content'>
                <div className='product__image' >
                  <img src={image} alt={`Imagen del producto ${name}`} />
                </div>
                <div className='product__inner'>
                        <div className='product__description'>
                            <h4>QBR | Remera {name} </h4>
                            <p>Precio: ${price}</p>
                            <p>{description}</p>
                        </div>
                        <div className='product__inner-btn'>
                            {!isInCart(id) || quantityAdded > 0
                            ? <ItemCount onAdd={onAddToCart} initial={0} stock={stock} quantity={quantityAdded} /> 
                            : <Link to='/cart' className='to__cart'> Ir al carrito </Link>}
                        </div>
                </div>
              </div>
              <Cart />
            </section>
    )
}

export default ItemDetail
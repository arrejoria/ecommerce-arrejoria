import './ItemDetail.css'
import { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import { useNotification } from '../../Notifications/Notification';

const ItemDetail = ({id, name, image, price, description, stock}) => {

    const [productoAgregado, setProductoAgregado] = useState(0)

    const {addItem, isInCart} = useContext(CartContext)

    const showNotification = useNotification();

    const onAddToCart = (quantity) => {
      
      showNotification('Producto agregado al carrito', 'success')

      addItem({id, name, image, price, quantity})
      setProductoAgregado(quantity)
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
                            {!isInCart(id) && stock > 0
                            ? <ItemCount onAdd={onAddToCart} initial={0} stock={stock} quantity={productoAgregado} /> 
                            : <Link to='/cart' className='to__cart'> Ir al carrito </Link>}
                        </div>
                </div>
              </div>
            </section>
    )
}

export default ItemDetail
import {useContext } from "react"
import CartContext from '../../../Context/CartContext'
import CartItem from "../../CartItem/CartItem"
import { Link } from 'react-router-dom'
import './Cart.css'

const Cart = ({title}) => {
    const { cart, getTotal, getQuantity } = useContext(CartContext)


    if(getQuantity === 0){
        return (
            <div className="cart-empty">
                <p>No hay productos en el carrito</p>
            </div>
        )
    }

    return (
            
            <div className="cart-container">
            <div className="section-title"><h1>{title}</h1></div>       
            <section className="cart">
                <div className="cart-header">
                    <p>Cart</p>
                </div>
                <div className="cart-description">
                    <div className="header-title">
                    <div className="header-item">
                        <p>Producto</p>
                    </div>
                    <div className="header-item">
                        <p>Cantidad</p>
                    </div>
                    <div className="header-item">
                        <p>Precio</p>
                    </div>
                    </div>
                        {cart.map(item => <CartItem key={item.id} item={item} />)}
                    </div>
                </section>
                <div className="cart-footer cart-buttons">
                <Link to={'/products'}><button className="cart-button">Ir a productos</button> </Link>
                <Link to={'/checkout'}><button className="cart-button">Generar Orden</button></Link>
                    <p style={{font: 'normal normal bold 24px/18px "Poppins"'}}>Total: ${getTotal()}</p>
                </div>
            </div>
    )    
}

export default Cart
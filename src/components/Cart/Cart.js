import React, { useContext} from "react"
import CartContext from "../../Context/CartContext"
import CartItem from "../CartItem/CartItem"
import './Cart.css'


const Cart = () => {

    const { cart, clearCart } = useContext(CartContext)

    const limpiarCarrito = () => {
        clearCart()
    }

    const getTotal = () => {
        let total = 0
        cart.forEach(item => {
            total += item.price * item.quantity
        })
        return total
    }

    const getQuantity = () => {
        let quantity = 0
        cart.forEach(prod => {
            quantity += prod.quantity
        })
    return quantity
    }

    if(getQuantity() === 0){
        return (
            <div className="cart-empty">
                <p>No hay productos en el carrito</p>
            </div>
        )
    }

    return (
        <div className="cart">
            <div className="cart-header">
                <h2>Cart</h2>
            </div>
            <div className="cart-body">
                {cart.map(item => <CartItem key={item.id} item={item} />)}
            </div>
            <div className="cart-footer cart-buttons">
                <button className="cart-button" onClick={ limpiarCarrito}>Vaciar Carrito</button>
                <button className="cart-button"  >Generar Orden</button>
                <p style={{font: 'normal normal bold 24px/18px "Poppins"'}}>Total: {getTotal()}</p>
            </div>
        </div>
    )    
}

export default Cart
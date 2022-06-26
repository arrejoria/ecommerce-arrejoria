import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import './CartItem.css'

import { useNotification } from "../../Notifications/Notification";


    const CartItem = ({item}) => {
    const { removeItem } = useContext(CartContext)

    const showNotification = useNotification();

    const remove = () => {

        showNotification('Producto eliminado del carrito', 'error')
        removeItem(item.id)
    }

    const {name, price, quantity } = item;

    return (
        <div className="cart-items">
            <div className="cart-item-title">
                <p>{name}</p>
            </div>
            <div className="cart-item-quantity">
                <p>{quantity}</p>
            </div>
            <div className="cart-item-price">
                <p>{price}</p>
            </div>
            <div className="cart-item-remove">
                <button onClick={remove}>remover</button>
            </div>
        </div>

    );
    }

    export default CartItem;
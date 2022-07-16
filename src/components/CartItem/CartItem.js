import './CartItem.css'
import { useContext } from "react";
import CartContext from "../../Context/CartContext";

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
                <div className="cart-item">
                    <p>{name}</p>
                </div>
                <div className="cart-item">
                    <p>{quantity}</p>
                </div>
                <div className="cart-item">
                    <p>${price}</p>
                </div>
                <div className="cart-item-remove">
                    <button onClick={remove}>remover</button>
                    <button onClick={remove}>X</button>
                </div>
            </div>
    );
    }

    export default CartItem;
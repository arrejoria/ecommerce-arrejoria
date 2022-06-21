import React, { useContext, useState, useEffect } from "react"
import CartContext from "../../Context/CartContext"
import './Cart.css'


const Cart = () => {

    const { cart } = useContext(CartContext)


    console.log(cart)

    return (
        <div className="cart">
            <div className="cart__header-container">
                <div className="cart__header-content">
                    <div className="cart__header-item">
                        Producto
                    </div>
                    <div className="cart__header-item">
                        Cantidad
                    </div>
                    <div className="cart__header-item">
                        Precio
                    </div>
                    <div className="cart__header-item">
                        Eliminar
                    </div>
                </div>
            </div>
            <div className="cart__body">
                <div className="cart__body-item">
                    <div className="cart__body-item">
                        <p>Product Title</p>
                    </div>
                    <div className="cart__body-item">
                        <p>2</p>
                    </div>
                    <div className="cart__body-item">
                        <p>$100</p>
                    </div>
                    <div className="cart__body-item">
                        <button>Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    )
                
}

export default Cart
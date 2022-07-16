import {useState, useEffect, createContext } from "react"

const CartContext = createContext() 

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [quantity, setQuantity ] = useState(0)

    useEffect(() => { 
        let quantity = 0
        cart.forEach(prod => {
            quantity += prod.quantity
        })

        setQuantity(quantity)
    }, [cart])

    const getTotal = () => {
        let total = 0
        cart.forEach(prod => {
            total += prod.price * prod.quantity
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

    const addItem = (toAdd) => {
        if(!isInCart(toAdd.id)){
            setCart([...cart, toAdd])
        }
    }
    
    const clearCart = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.find(item => item.id === id)
    }

    const removeItem = (productId) => {
        const newCart = cart.filter(item => item.id !== productId)
        setCart(newCart)
    }


    return (
        <CartContext.Provider value={{
            cart,
            quantity,
            addItem,
            isInCart,
            removeItem,
            clearCart,
            getQuantity,
            getTotal
               }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
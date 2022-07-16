import './checkout.css'
import { useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../../../Context/CartContext"
import CheckoutForm from '../../CheckoutForm/CheckoutForm'

const Checkout = ({title}) => {
    const { cart } = useContext(CartContext)

    return (
        <div className="checkout-container">
            <div className="section-title"><h1>{title}</h1></div>
                <div className="checkout-form"> 
                    {cart.length > 0 ?<CheckoutForm />:<span className='section-title'>No hay productos en el carrito</span>}
                </div>
                <Link to="/"> <button className="confirmation-btn">Volver a la tienda</button></Link>
        </div>
    )
}

export default Checkout
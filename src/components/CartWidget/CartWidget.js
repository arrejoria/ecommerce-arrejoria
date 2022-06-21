// get our fontawesome imports
import { ShoppingCart } from '@mui/icons-material';
import { useContext } from 'react';
import CartContext from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {

    const { quantity } = useContext(CartContext)


    return (
        <div className="cart-summary">
            <Link to='/cart'>
                <ShoppingCart />
            </Link>
            <div className="cart-summary-item">{ quantity }</div>
        </div>
    )
}

export default CartWidget



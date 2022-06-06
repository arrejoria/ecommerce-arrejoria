// get our fontawesome imports
import { ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './CartWidget.css';
// import { Link } from 'react-router-dom';
const CartWidget = () => {

    return (
        <div className="cart-summary">
            <a href='/'>
                <ShoppingCart />
            </a>
            <div className="cart-summary-item"> 0 </div>
        </div>
    )
}

export default CartWidget



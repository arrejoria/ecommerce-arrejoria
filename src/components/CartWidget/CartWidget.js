// get our fontawesome imports

const CartWidget = () => {

    return (
        <div className="cart-summary">
            <a href="#">
                <box-icon type='solid' color='white' name='cart-alt'></box-icon>
            </a>
            <div className="cart-summary-item"></div>
        </div>
    )
}

export default CartWidget
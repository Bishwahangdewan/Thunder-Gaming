import React from 'react';
import { Link } from 'react-router-dom';
import './cart-icon.styles.scss';

import { connect } from 'react-redux';
import { cartAction } from '../../redux/cart/cartaction';

const CartIcon = ({ toggleCart }) => (
    <div className="cart-icon">
        <p className="cart" onClick={toggleCart}>CART</p>
        <span className="counter">0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(cartAction())
})

export default connect(null, mapDispatchToProps)(CartIcon);
import React from 'react';
import './cart-icon.styles.scss';

import { connect } from 'react-redux';
import { cartAction } from '../../redux/cart/cartaction';

import { selectCartItemsCount } from '../../redux/cart/cart.selector';

const CartIcon = ({ toggleCart, itemCount }) => (
    <div className="cart-icon">
        <p className="cart" onClick={toggleCart}>CART</p>
        <span className="counter">{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(cartAction())
})

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

import { connect } from 'react-redux';

import CartItem from '../cart-item/cart-item.component';

const cartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.map(cartItem => <CartItem item={cartItem} />)}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = ({ cart }) => ({
    cartItems: cart.cartItems
})

export default connect(mapStateToProps)(cartDropdown);
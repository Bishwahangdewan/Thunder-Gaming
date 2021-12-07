import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

import { connect } from 'react-redux';

import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selector';

import { useNavigate } from 'react-router-dom';

import { cartAction } from '../../redux/cart/cartaction';

const CartDropdown = ({ cartItems, dispatch }) => {

    const navigate = useNavigate();

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length ? cartItems.map(cartItem => <CartItem item={cartItem} />) :
                    <p>No items in the cart</p>
                }
            </div>
            <CustomButton onClick={() => { navigate("/checkout"); dispatch(cartAction()) }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);
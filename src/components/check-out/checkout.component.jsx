import React from 'react';

import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';
import { selectCartItems, selectCartItemsPrice } from '../../redux/cart/cart.selector';

import CheckoutItem from '../checkout-item/checkout-item.component';

import StripeButton from '../stripe-button/stripe-button.component';

import './checkout.styles.scss';

const CheckOut = ({ cartItems, cartItemsPrice }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>

        {
            cartItems.map(cartItem =>
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )
        }

        <div>TOTAL : $ {cartItemsPrice}</div>

        <StripeButton />
    </div>
)


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartItemsPrice: selectCartItemsPrice
})

export default connect(mapStateToProps)(CheckOut);
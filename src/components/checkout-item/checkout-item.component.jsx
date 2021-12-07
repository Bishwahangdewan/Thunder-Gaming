import React from 'react';

import './checkout-item.styles.scss';
import { removeItem } from '../../redux/cart/cartaction';
import { reduceItemQuantity } from '../../redux/cart/cartaction';
import { addItem } from '../../redux/cart/cartaction';

import { connect } from 'react-redux';

const CheckoutItem = ({ cartItem, removeFromCart, reduceQuantity, addQuantity }) => (
    <div className="checkout-item">
        <div className="image-container">
            <img src={cartItem.imgUrl} alt="item" />
        </div>
        <span className="name">{cartItem.name}</span>
        <span className="quantity">
            <div className="arrow" onClick={() => reduceQuantity(cartItem)}>&#10094;</div>
            <span className="value">{cartItem.quantity}</span>
            <div className="arrow" onClick={() => addQuantity(cartItem)}>&#10095;</div>
        </span>
        <span className="price">$ {cartItem.price}</span>
        <div className="remove-button" onClick={() => removeFromCart(cartItem)}>Remove</div>
    </div>
)

const mapDispatchToProps = dispatch => ({
    removeFromCart: item => dispatch(removeItem(item)),
    reduceQuantity: item => dispatch(reduceItemQuantity(item)),
    addQuantity: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);

import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => (
    <div className="checkout-item">
        <div className="image-container">
            <img src={cartItem.imgUrl} alt="item" />
        </div>
        <span className="name">{cartItem.name}</span>
        <span className="quantity">{cartItem.quantity}</span>
        <span className="price">$ {cartItem.price}</span>
        <div className="remove-button">Remove</div>
    </div>
)

export default CheckoutItem;

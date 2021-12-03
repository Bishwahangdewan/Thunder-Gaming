import React from 'react';

import './cart-item.styles.scss';

const cartItem = ({ item }) => {
    return (
        <div className="cart-item">
            <div className="item-image">
                <img src={item.imgUrl} />
            </div>

            <div className="item-details">
                <p className="itemname">{item.name}</p>
                <p className="price">$ {item.price} * {item.quantity}</p>
            </div>
        </div>
    )
}

export default cartItem;

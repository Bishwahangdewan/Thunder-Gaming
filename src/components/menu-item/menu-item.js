import React from 'react';
import './menu-item.styles.scss';

import Game1 from '../../assets/game1.jpg';
import Game2 from '../../assets/game2.jpg';

const MenuItem = ({ title, img }) => (
    <div style={{ backgroundImage: `url(${img})` }} className="menu-item">
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)


export default MenuItem;
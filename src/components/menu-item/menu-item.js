import React from 'react';
import { useNavigate } from 'react-router-dom';

import './menu-item.styles.scss';


const MenuItem = ({ title, img, linkto }) => {
    const navigate = useNavigate();

    return (
        <div style={{ backgroundImage: `url(${img})` }} className="menu-item">
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle" onClick={() => navigate(`${linkto}`)}>SHOP NOW</span>
            </div>
        </div >
    )
}


export default MenuItem;
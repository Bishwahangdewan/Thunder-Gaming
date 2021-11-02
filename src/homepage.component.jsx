import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Latest Games</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
                <div className="content">
                    <h1 className="title">Popular Games</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
)

export default HomePage;
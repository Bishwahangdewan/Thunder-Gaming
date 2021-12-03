import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, issmall, ...otherprops }) => (
    <button className={`${issmall ? "small" : ""}${isGoogleSignIn ? "google-signin" : ""} custom-button`} {...otherprops}>
        {children}
    </button>
)

export default CustomButton;
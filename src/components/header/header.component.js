import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import './header.styles.scss';

import { getAuth, signOut } from 'firebase/auth';

const Header = ({ currentUser }) => {

    const auth = getAuth();

    return (
        <div className="header">
            <Link to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop" >SHOP</Link>
                <Link className="option" to="/shop" >CONTACT</Link>
                {currentUser ?
                    <div className="option" onClick={() => signOut(auth)}>SIGN OUT</div> :
                    <Link className="option" to="/signin">SIGN IN</Link>}
            </div>
        </div>
    )
}

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import './header.styles.scss';

import { getAuth, signOut } from 'firebase/auth';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, toggleHidden }) => {

    const auth = getAuth();
    console.log(currentUser)

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
                <CartIcon />
                {toggleHidden ? <CartDropdown /> : ''}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    toggleHidden: state.cart.hidden
})

export default connect(mapStateToProps)(Header);
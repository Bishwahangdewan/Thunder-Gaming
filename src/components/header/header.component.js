import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import './header.styles.scss';

import { getAuth, signOut } from 'firebase/auth';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectHidden } from '../../redux/cart/cart.selector';

const Header = ({ currentUser, toggleHidden }) => {

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
                <CartIcon />
                {toggleHidden ? <CartDropdown /> : ''}
            </div>
        </div>
    )
}

//if there are multiple selectors to pass then create structured selector does this and pushes the state down to each selectors

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    toggleHidden: selectHidden
})

export default connect(mapStateToProps)(Header);
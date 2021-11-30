import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up-component/sign-in-and-sign-up.component';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDoc, doc } from 'firebase/firestore';

import { createUserProfileDocument } from './firebase/firebase.util';

import { connect } from 'react-redux';

import { setCurrentUser } from './redux/user/user.action';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    const auth = getAuth();
    this.unsubscribeFromAuth = onAuthStateChanged(auth, async user => {

      if (user) {
        const ref = await createUserProfileDocument(user);

        const docSnap = await getDoc(ref);

        setCurrentUser({
          id: docSnap.id,
          ...docSnap.data()
        })

      } else {
        setCurrentUser(user)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={this.props.currentUser ? <Navigate to="/" /> : <SignInAndSignUp />} />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

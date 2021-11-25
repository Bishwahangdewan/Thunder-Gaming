import React from 'react';
import Signin from '../../components/sign-in/sign-in.component';
import Signup from '../../components/signup/signup.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUp = () => (
    <div className="sign">
        <Signin />
        <Signup />
    </div>
)

export default SignInAndSignUp;
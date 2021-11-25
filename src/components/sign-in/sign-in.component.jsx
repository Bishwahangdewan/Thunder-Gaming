import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.util';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

class Signin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;
        const auth = getAuth();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            this.setState({ email: '', password: '' });
        } catch (err) {
            alert(err.message);
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Signin with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" label="Email" handleChange={this.handleChange} value={this.state.email} required />

                    <FormInput type="password" name="password" label="Password" handleChange={this.handleChange} value={this.state.password} required />

                    <CustomButton type="submit"> SIGN IN </CustomButton>
                    <CustomButton style={{ marginLeft: "20px" }} type="button" isGoogleSignIn={true} onClick={signInWithGoogle}>SIGN IN GOOGLE</CustomButton>
                </form>

            </div>
        )
    }
}

export default Signin;
import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import './signup.styles.scss';
import { createUserProfileDocument } from '../../firebase/firebase.util';

class signIn extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmpassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmpassword } = this.state;
        const auth = getAuth();

        if (password !== confirmpassword) {
            alert("Passwords do not match");
            return;
        } else {

            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                //RESEARCH :: the user gets added in the firestore database even if the below code is not written.Why????
                createUserProfileDocument(userCredential.user, { displayName });
            } catch (err) {
                console.log(err.message);
            }
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-in">
                <h2>Do not have an Account?</h2>
                <span>Sign up with Email and Password</span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput type="text" name="displayName" label="Username" onChange={this.handleChange} value={this.state.displayName} required />

                    <FormInput type="email" name="email" label="Email" onChange={this.handleChange} value={this.state.email} required />

                    <FormInput type="password" name="password" onChange={this.handleChange} label="Password" value={this.state.password} required />

                    <FormInput type="password" name="confirmpassword" onChange={this.handleChange} label="Confirm Password" value={this.state.confirmpassword} required />

                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>

            </div>
        )
    }
}

export default signIn;
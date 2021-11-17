import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class Signin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({ email: '', password: '' });
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        console.log(event.target.value)
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

                    <CustomButton type="submit" value="SIGN IN" > SIGN IN </CustomButton>
                </form>
            </div>
        )
    }
}

export default Signin;
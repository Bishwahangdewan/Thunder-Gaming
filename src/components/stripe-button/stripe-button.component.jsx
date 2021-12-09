import { onIdTokenChanged } from 'firebase/auth';
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_VvWjqy13EI2MSDgDxy3b5jbx00KrrL41yi'

    const onToken = (token) => {
        console.log(token)
        alert("Payment Successfull")
    }

    return (
        <StripeCheckout
            name="GameBox"
            label="Proceed to payment"
            amount={priceForStripe}
            stripeKey={publishableKey}
            shippingAddress
            billingAddress
            token={onToken}
        />
    )
}

export default StripeButton
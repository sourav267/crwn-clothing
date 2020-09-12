import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = token => {
    console.log(token);
    alert('Payment Successful');
}

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HOnBtKruqX7zl3uxvhpLyYgbKacAtN3WS3iMaNWv5IZAPijb5LU1uGe1l7n9S21ikDilVPilJFvxFLFcGpqPY4100dCm6ECuO';
    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image= 'https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel = 'Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );

};

export default StripeCheckoutButton;

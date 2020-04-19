import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_uy7n41Bvdgt5hpeViIfEgG9m00ZIi0jcEy";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then(() => {
        alert("Payment Successful");
      })
      .catch((err) => {
        console.log("Payment error: ", err);
        alert(
          "There was as issue with your payment, please use the provided credit card"
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Floz Clothing"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total price is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

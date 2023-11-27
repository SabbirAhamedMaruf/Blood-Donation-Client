import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  // STEP 2 :
  const [clientSecret, setClientSecret] = useState(null);

  // guess a total price which can be found from cart section
  const totalPrice = 1000;

  // STEP 2 : (After creating payment intent inside server)
  // ! Without client secret key we can't initialize payment
  useEffect(() => {
    // use axios secure instead of. And sending price as body
    fetch("http://localhost:5000/pay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: totalPrice }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  // Payment submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // checking stripe is ready or not
    if (!stripe || !elements) {
      return;
    }

    // taking card data from card element
    const card = elements.getElement(CardElement);

    // handle card is empty or not
    if (card === null) {
      return;
    }

    // creating payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    // Handling payment error
    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }

    // STEP 3: confirm payment
    const { paymentIntent, confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: "Sabbir Ahamed Maruf" || "anonymous",
            email: "sabbirahamedmaruf02@gmail.com" || "anonymous",
          }, //get data from user
        },
      }
    );

    if (confirmError) {
      console.log("Confirm Error");
    } else {
      {
        if(paymentIntent.status === "succeeded"){
          console.log("Transaction successfull. Transaction Id =",paymentIntent.id,"Payment Amount =",(paymentIntent.amount)/100,"$")

          // Save payment details inside database
          const paymentDetailtForServer = {
            name : "Sabbir Ahamed Maruf",
            email: "sabbirahamedmaruf02@gmail.com",
            price: totalPrice,
            TransactionID : paymentIntent.id,
            date : new Date(),// use moment js
            // cartId : cart.map(item => item._id)
            // menuId : cart.map(item=>item.menuId)
            status:'pending'
          }

          // create payment api on server Follow video 70-7


        }
      }
    }

    // ! Since we are handling card we need a publishable key for payment. get it from stripe website
  };
  return (
    // form of payment
    <div className="p-20">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="px-6 py-2 font-semibold uppercase rounded-md mt-10 bg-green-300 my-4 disabled:cursor-not-allowed"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-600">{error}</p>
      </form>
    </div>
  );
};

export default CheckoutForm;


// TODO : donor funding form is ready create api for getting publishbale key [get key from stripe site on developer page and apply inside env file on server. and make and api for saving user fund information] and make page responsive

// TODO: Check donorhome and updatedonationdata todos and go to support session
import funding from "../../../assets/funding.jpg";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

// stripe key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_API_KEY);
const DonorFundForOrganization = () => {
  return (
    <div>
      <div className="w-[90%] lg:w-[80vw] m-auto shadow-lg  md:p-5 lg:p-10 rounded-lg lg:rounded-2xl my-5  flex flex-col lg:flex-row gap-10 md:gap-5 lg:gap-20 items-center">
        <div className="lg:w-1/2 p-5 lg:p-0">
          <img src={funding} className="shadow-lg lg:shadow-xl rounded-lg" />
        </div>
        <div className="md:w-1/2 space-y-5">
          <h1 className="text-center font-bold text-xl lg:text-4xl">Funding</h1>
          <div>
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorFundForOrganization;

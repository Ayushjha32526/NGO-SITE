import { loadStripe } from "@stripe/stripe-js";

export default async function checkout({ lineItems }) {
    let stripePromise:any = null;

    let getStripe = () => {
        if (!stripePromise) {
            stripePromise = loadStripe(process.env.NEXT_PUBLIC_API_KEY);
        }
        return stripePromise;
    };

    try {
        const stripe = await getStripe();
        // Make sure your lineItems are set up correctly based on your payment mode
        // If you are using mode "payment", ensure that lineItems represent one-time prices
        await stripe.redirectToCheckout({
            mode: "payment",
            lineItems,
            successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
            cancelUrl: window.location.origin,
        });
    } catch (error) {
        console.error("Error during checkout:", error);
        // Handle the error appropriately, e.g., show an error message to the user
    }
}
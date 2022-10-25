import Stripe from "stripe";
const stripe = Stripe(process.env.STRIPE_KEY)


export const stripeCharges = async (req, res) => {
    stripe.charges.create({
         source: req.body.tokenId,
         amount: req.body.amount,
         currency: "usd"
     },
         (stripeErr, stripeRes) => {
         if (stripeErr) {
             res.status(500).json(stripeErr)
         } else {
             res.status(200).json(stripeRes);
         }
     });
    // const session = await stripe.checkout.sessions.create({
    //     payment_method_types: ["card"],
    //     line_items: [
    //         {
    //             price_data: {
    //                 currency: "usd",
    //                 product_data: {
    //                     name: "T-shirt",
    //                 },
    //                 unit_amount: 2000,
    //             },
    //             quantity: 1,
    //         },
    //     ],
    //     mode: "payment",
    //     success_url:`${process.env.CLIENT_URL}/checkout-success`,
    //     cancel_url: `${process.env.CLIENT_URL}/cart`,
    // });
    //
    // res.send({url: session.url})


}

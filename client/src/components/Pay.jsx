import React, {useEffect, useState} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const KEY = "pk_test_51JtTmJD7n7XpSEJ4oChM96yNLrZ5Z6PpwmbC3uEx9K2mMMApnNZ8UIBCCNuZSa9WA4tikYdUC0ByhWYaqcK8FLJB00x6qHLM7P"
const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate();
    const onToken = (token) => {
        setStripeToken(token)
    }
    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post("http://localhost:4000/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 2000,
                });
                console.log(res.data);
                navigate("/success")
            } catch (err) {

                console.log(err)
            }
        }
        stripeToken && makeRequest()
    }, [stripeToken,navigate])

    return (<>
        <div style={{
            height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"
        }}>
            {stripeToken?(<span>Processing.Please wait </span>):( <StripeCheckout name={"Anna Shop"}
                                                                                  billingAddress
                                                                                  shippingAddress
                                                                                  description={"Your total is $20"}
                                                                                  amount={2000}
                                                                                  token={onToken}
                                                                                  stripeKey={KEY}
            >
                <button style={{
                    border: "none", width: 120, borderRadius: 5, padding: "20px"
                }}>
                    Pay Now
                </button>
            </StripeCheckout>)}

        </div>
    </>);
};

export default Pay;
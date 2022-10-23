import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const Pay = () => {
    return (
        <>
            <div style={{
                height:"100vh",
                display:"flex",
                alignItems:"center",
                justifyContent:"center"
            }}>
                <button style={{
                    border:"none",
                    width:120,
                   borderRadius:5,
                    padding:"20px"
                }}>
                    Pay Now
                </button>

            </div>
        </>
    );
};

export default Pay;
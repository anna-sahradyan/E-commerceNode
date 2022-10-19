import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
    userId: {type: String, required: true},
    products: [
        {
            productId: {
                type: String
            },
            quantity: {
                type:Number,
                default:1
            }
        }
    ],

}, {timeStamp: true});

export default mongoose.model("Cart", cartSchema);
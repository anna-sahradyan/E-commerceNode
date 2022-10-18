import mongoose from 'mongoose';

const goodsSchema =  new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true,

    },
    img: {
        type: String,
        required: true,

    },
    categories: {
        type: Array,


    }, size: {
        type: String,


    }, color: {
        type: String,


    },
    price: {
        type: Number,
        required: true,

    },

}, {timestamps: true});


const GoodsMessage = mongoose.model('GoodsMessage', goodsSchema);

export default GoodsMessage;
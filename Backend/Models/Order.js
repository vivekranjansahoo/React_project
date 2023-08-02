const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name:String,
  country:String,
  streetaddress:String,
  city: String,
  state: String,
  pincode:Number,
  phoneno:Number,
  email:String,
  paymentmethod:String,
  billno:Number,
  productdata: [{ 
    _id: { type: String},
    name: { type: String},
    desc: { type: String },
    price:{type : Number},
    image:{type:String},
    quantity:{type:Number},
  }],
  ammount:Number,
});

const Order = mongoose.model('Order', userSchema);

module.exports = Order;
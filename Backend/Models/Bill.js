const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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

const Bill = mongoose.model('Bill', userSchema);

module.exports = Bill;
const mongoose = require('mongoose');
const {mongo} = require('mongoose');
//import mongoose, {mongo} from 'mongoose';
const {Schema}=mongoose;


const otpSchema = new Schema({
    Phone: {type:Number},
    OTP:{type:Number},
});

module.exports =mongoose.model('OTPs',otpSchema);


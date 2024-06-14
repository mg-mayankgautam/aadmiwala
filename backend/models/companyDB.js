const mongoose = require('mongoose');
const {mongo} = require('mongoose');
//import mongoose, {mongo} from 'mongoose';
const {Schema}=mongoose;


const companySchema = new Schema({
    fullName: {type:String},
    email: {type:String},
    Phone: {type:Number},
    companyName: {type:String},
    companyService: {type:String},
    serviceType: {type:Array},
    agencyBriefing: {type:String},
    GSTno: {type:String},
    priceRange: {type:String},
    country: {type:String},
    address: {type:String},
    city: {type:Array},
    imageURLs: {type:Array},
    date: {type:String}
});

module.exports =mongoose.model('companies', companySchema);


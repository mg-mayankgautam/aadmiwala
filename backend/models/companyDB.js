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
    noOfpositions: {type:Number},
    country: {type:String},
    state: {type:String},
    city: {type:String},
});

module.exports =mongoose.model('companies', companySchema);


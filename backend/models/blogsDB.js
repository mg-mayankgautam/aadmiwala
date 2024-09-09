const mongoose = require('mongoose');
const { mongo } = require('mongoose');
//import mongoose, {mongo} from 'mongoose';
const { Schema } = mongoose;


const blogSchema = new Schema({
    blogTitle: { type: String },
    blogText: { type: String },
    blogTime: { type: String },
    imageURL: { type: Object },
});

module.exports = mongoose.model('Blogs', blogSchema);
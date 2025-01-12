// const mongoose = require( "mongoose");
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://saikatmandal290103:7WAERKXfIa9AW5zO@cluster0.wgb7u.mongodb.net/users");

// backend/db.js


// Create a Schema for Users
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const accountsSchema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    balance:{
        type:Number,
        required: true, 
    }
})

// Create a model from the schema
const User = mongoose.model('User', userSchema);
const Account = mongoose.model("Account", accountsSchema);
module.exports = {
	User,Account
};

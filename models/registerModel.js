/*const express = require('express');
const bodyParser = require('body-parser')
const path = require('path') */
const bcryptjs = require('bcryptjs')
const mongoose = require('mongoose')



//create an instance of a  model-model helps u piratically save ur data attaches collection
//const Register = mongoose.model('Register', registerSchema) //User-is a collection(table) nameSchema is the data


//schema db definition
const registerSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required:'Please Enter your first name'
    },
    last_name: String,
    user_name: String,
    email: String,
    gender: String,
    city: String,
    country: String,
    password: {
        type: String,
        required: 'Please Enter your password'
    }
});

registerSchema.add({user_name: {type: String, unique:true, required:'Please this username already exists'} })

//pre-save / pre-hook saves password before saving it to the database  - matching a password
registerSchema.pre('save', function(next){
    this.password = bcryptjs.hashSync(this.password, 10);
    next() 
    //10  is a salt:
}); //hashing is the process of encrypting

//authenticate
registerSchema.statics.authenticate = async function(user_name, password){
    const user = await this.finOne({user_name})
    if(!user){
        throw new Error('User not found')
    }
    const match = await bcryptjs.compare(password, user.password)
    if(match){
        return user;
    }
}

module.exports = mongoose.model("Register", registerSchema)
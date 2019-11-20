const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')
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
    email: String,
    gender: String,
    city: String,
    country: String,
});



module.exports = mongoose.model("Register", registerSchema)
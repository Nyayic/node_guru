const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')


// photo schema
const Schema = mongoose.Schema;
const photoSchema = new Schema({
  path:  { type: String },
  caption: { type: String }
  });

  
module.exports = mongoose.model('Photo', photoSchema);

const multer = require('multer');
const path   = require('path');
const express = require('express');
const mongoose = require('mongoose')
const router = express.Router(); 
const bodyParser = require('body-parser')
const Photo = require('../models/photoModel')
const upload    = require('/fileUpload');
const app = express();

router.get('/', (req, res) => {
    res.render('upload')
})


router.post('/', function(req, res) {
    upload(req, res,(error) => {
        if(error){
           res.redirect('/?msg=3');
        }else{
          if(req.file == undefined){
            
            res.redirect('/?msg=2');
          }else{
               
              /**
               * Create new record in mongoDB
               */
              var fullPath = "files/"+req.file.filename;
              var document = {
                path:     fullPath, 
                caption:   req.body.caption
              };
    
            var photo = new Photo(document); 
            photo.save(function(error){
              if(error){ 
                throw error;
              } 
              res.redirect('/?msg=1');
           });
        }
      }
    });
});


/** Storage Engine */
const storageEngine = multer.diskStorage({
  destination: './public/files',
  filename: function(req, file, fn){
    fn(null,  new Date().getTime().toString()+'-'+file.fieldname+path.extname(file.originalname));
  }
}); 
//init
const upload =  multer({
  storage: storageEngine,
  limits: { fileSize:200000 },
  fileFilter: function(req, file, callback){
    validateFile(file, callback);
  }
}).single('photo');
var validateFile = function(file, cb ){
  allowedFileTypes = /jpeg|jpg|png|gif/;
  const extension = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType  = allowedFileTypes.test(file.mimetype);
  if(extension && mimeType){
    return cb(null, true);
  }else{
    cb("Invalid file type. Only JPEG, PNG and GIF file are allowed.")
  }
}
module.exports = upload;
// module.exports = router;
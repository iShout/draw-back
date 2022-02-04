var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const url = "mongodb://localhost/drawList"

mongoose.connect(url)
.then(()=>{console.log('连接成功')})
.catch((err)=>{console.log(err,'err')});

var drawListSchema = new mongoose.Schema({
    account:String
});
const ExistList =  mongoose.model('ExistList', drawListSchema);

router.post('/', function(req, res, next) {
    ExistList.find(req.query,(err,docs)=>{
        if(err){
            console.log(err,'err');
            return
        }else{
            res.send(docs);
        }
    })
  });

  module.exports = router;
var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const url = "mongodb://localhost/drawList"

mongoose.connect(url)

var resSchema = new mongoose.Schema({
    account:String
});
const Result =  mongoose.model('Result', resSchema);

router.get('/getRes',function(req, res, next){
    Result.find({},function(err,docs){
        res.send(docs)
    })
})
router.post('/storeRes',function(req,res,next){
    let submitedData = req.query
    const result = new Result(submitedData)
    result.save((err,product)=>{
        if(err){
            console.log(err,'err');
            return
        }else{
            res.send("抽奖结果已产生");
        }
    })
})

module.exports = router;
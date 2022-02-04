var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const url = "mongodb://localhost/drawList"

mongoose.connect(url)

var drawListSchema = new mongoose.Schema({
    account:String
});
const Drawlist =  mongoose.model('Drawlist', drawListSchema);
router.post('/', function(req, res, next) {
    let submitedData = req.query
    console.log(submitedData)
    const addData = new Drawlist(submitedData)
    Drawlist.find(submitedData,function(err,doc){
       if(doc.length){
           res.send("你不是已经添加过了吗？？ 找事是吧")
       }else{
        addData.save((err,product)=>{
            if(err){
                console.log(err,'err');
                return
            }else{
                res.send('添加进抽奖队伍(没开玩笑)');
            }
        })
       }
    })
  });
  router.get('/queryDrawList',function(req,res,next){
    Drawlist.find({},function(err,doc){
        if(err){
            console.log(err,'err')
            return
        }else{
            res.send(doc);
        }
    })
  })

module.exports = router;
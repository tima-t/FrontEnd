/**
 * Created by Tito on 2/13/2016.
 */
var MainPost = require("../models/mainPosts");
module.exports.upload = function(req,res){
    var mainPost = new MainPost(req.body);
    mainPost.save(function(err,result){
        console.log(err);
        console.log(result);
        res.json(result);
    });
}

module.exports.show=function(req,res){
    MainPost.find({},function(err,result){
        res.json(result);
    })

}
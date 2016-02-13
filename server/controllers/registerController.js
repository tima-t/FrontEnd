/**
 * Created by Tito on 2/12/2016.
 */
var User = require("../models/user");
module.exports.create = function(req,res){
    var user = new User(req.body);
    user.save(function(err,result){
        if(err){
            console.log(err);
        }
        res.json(result);
    });

}


module.exports.get=function(req,res){
    User.find({},function(err,result){
        res.json(result);
    })
}
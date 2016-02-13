/**
 * Created by Tito on 2/13/2016.
 */
var User = require("../models/user");

module.exports.check=function(req,res){
    var user= req.body;
    User.find(user,function(err,result){

       //Todo if(result[0].role == "admin"){
        //   adminTmt=true;
       // }

        res.json(result[0]);

    })
}
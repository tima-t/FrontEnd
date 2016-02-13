/**
 * Created by Tito on 2/13/2016.
 */
var ProductAdm = require("../models/products");
module.exports.upload = function(req,res){
    var product = new ProductAdm(req.body);
    product.save(function(err,result){
        console.log(err);
        console.log(result);
        res.json(result);
    });
}

module.exports.show=function(req,res){
    ProductAdm.find({},function(err,result){
        res.json(result);
    })
}
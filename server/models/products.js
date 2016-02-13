/**
 * Created by Tito on 2/13/2016.
 */
var mongoose = require("mongoose");
module.exports = mongoose.model("products",{
    heading:String,
    img: String,
    info: String,
    price: Number
});
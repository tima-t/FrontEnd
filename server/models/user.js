/**
 * Created by Tito on 2/12/2016.
 */
var mongoose = require("mongoose");
module.exports = mongoose.model("users",{
    name:String,
    pass: String,
    email: String,
    role: String

});
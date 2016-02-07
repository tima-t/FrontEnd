/**
 * Created by Tito on 2/7/2016.
 */
var mongoose = require("mongoose");
module.exports = mongoose.model("posts",{
    name:String,
    src: String,
    info: String
});


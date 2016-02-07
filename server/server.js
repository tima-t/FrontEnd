var express = require ("express"),
    app = express(),
    bodyParser = require("body-parser"),
    path = require("path"),
    rootPath = path.normalize(__dirname + "/../"),
    mongoose = require("mongoose"),
    postController= require("./controllers/postsController");

mongoose.connect("mongodb://localhost:27017/honeyApp");


app.use(express.static(rootPath));
app.use(bodyParser());
app.get("/",function(req,res){
    res.sendFile("index.html");
});

app.post("/api/posts", postController.create);
app.get("/api/posts",postController.get);

app.listen(3000,function(){
    console.log("I am in");
});

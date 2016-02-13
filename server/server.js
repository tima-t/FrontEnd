adminTmt=1;
var express = require ("express"),
    app = express(),
    bodyParser = require("body-parser"),
    path = require("path"),
    rootPath = path.normalize(__dirname + "/../"),
    mongoose = require("mongoose"),
    postController= require("./controllers/postsController"),
    registerController= require("./controllers/registerController"),
    loginController = require("./controllers/loginController"),
    mainPostsController= require("./controllers/mainPostsController"),
    productsAdmController= require("./controllers/productAdmController");


mongoose.connect("mongodb://localhost:27017/honeyApp");


app.use(express.static(rootPath));
app.use(bodyParser());
app.get("/",function(req,res){
    res.sendFile("index.html");
});

app.post("/api/posts", postController.create);
app.get("/api/posts",postController.get);

app.post("/api/users", registerController.create);
app.get("/api/users", registerController.get);

app.post("/api/logUser",loginController.check);



app.post("/api/postsAdm",mainPostsController.upload);
app.get("/api/postsAdm",mainPostsController.show);

app.post("/api/productsAdm",productsAdmController.upload);
app.get("/api/productsAdm",productsAdmController.show);



app.listen(3000,function(){
    console.log("I am in");
});

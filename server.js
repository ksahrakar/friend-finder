var express = require("express");
var path = require("path");

var app = express();
var PORT = 3113;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
// require("./app/routing/apiRoutes.js");
// require("./app/routing/htmlRoutes.js");

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

// These routes need to be moved to the htmlRoutes file
// ---------------------------------------------------------------
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname,"./app/public/home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname,"./app/public/survey.html"));
});

// ----------------------------------------------------------------

// These routes / data need to be moved to the apiRoutes file and friends file
//-----------------------------------------------------------------
var friends = [
    {email:"Ah'med@gmail.com",
    photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores:[5,1,2,4,4,3,2,1,4,5]},
    {email:"Tal'at@gmail.com",
    photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa4.jpg",
    scores:[5,2,3,4,4,5,2,2,4,4]}
];

app.get("/api/friends", function(req, res) {
    res.json(friends);
    //res.end("That was an API (GET) call");
});

app.post("/api/friends", function(req,res){
    res.end("That was a POST");
})
//-----------------------------------------------------------------
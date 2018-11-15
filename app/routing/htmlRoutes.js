var express=require("express");
var path = require("path");
var htRoute=express.Router();

htRoute.get("/", function(req, res) {
    res.sendFile(path.join(__dirname,"../public/home.html"));
});

htRoute.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname,"../public/survey.html"));
});

module.exports = htRoute;
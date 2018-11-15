// "/survey" GET route to display survey and "/" home.html route
// var path = require("path");

// module.exports = function(app){
//     app.get("/", function(req, res) {
//         res.end("hi there")
//         //res.sendFile(path.join(__dirname,"../public/home.html"));
//     });
//     app.get("/survey", function(req, res) {
//         res.sendFile(path.join(__dirname,"../public/survey.html"));
//     });
// }
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname,"./app/public/home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname,"./app/public/survey.html"));
});
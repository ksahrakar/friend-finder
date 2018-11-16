var express = require("express");
var app = express();
var htRoute = require("./app/routing/htmlRoutes.js");

var PORT = 3113;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/",htRoute);
app.use("/survey",htRoute);
require("./app/routing/apiRoutes.js")(app);

app.listen(PORT, function() {
    console.log("Application is listening on PORT " + PORT);
});

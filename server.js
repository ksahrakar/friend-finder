var express = require("express");
var path = require("path");
var friends = require("./app/data/friends");

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

// These routes / data need to be moved to the apiRoutes file
//-----------------------------------------------------------------

app.get("/api/friends", function(req, res) {
    res.json(friends);
});

app.post("/api/friends", function(req,res){
    var curUser=req.body;
    //console.log(curUser);
    var mostCompat;
    var dbDiff=40;
    var dupl=false;
    for (i=0;i<friends.length;i++){
        if(friends[i].email==curUser.email){
            dupl=true;break;
        }else{
            var curFriendDiff=0;
            for (j=0;j<10;j++){
                curFriendDiff+=Math.abs(friends[i].scores[j]-curUser.scores[j]);
            }
            //console.log(curFriendDiff);
            if (curFriendDiff<dbDiff){
                dbDiff=curFriendDiff;
                mostCompat=friends[i];
            }
        }    
    }
    if (dupl){
        mostCompat=curUser;
        res.json(mostCompat);
    }else{
        curUser.inScore=dbDiff;
        curUser.lastBestFit=dbDiff;
        mostCompat.lastBestFit=dbDiff;
        friends.push(curUser);
        //console.log(friends);
        res.json(mostCompat);
    }
})
//-----------------------------------------------------------------
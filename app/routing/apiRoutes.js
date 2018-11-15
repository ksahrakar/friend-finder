var express=require("express");
var path=require("path");
var apiRoute= express.Router();
var friends = require("../data/friends");


// GET route with url "/api/friends" shows all friends in JSON format
apiRoute.get("/api/friends", function(req, res) {
    res.json(friends);
});

// POST route with url "/api/friends" handles incoming survey results and compatibility logic
apiRoute.post("/api/friends", function(req,res){
    var curUser=req.body;
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
        res.json(mostCompat);
    }
    console.log(friends);
});

module.exports = apiRoute;
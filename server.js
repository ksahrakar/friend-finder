var express = require("express");
var app = express();
var path = require("path");
var htRoute = require("./app/routing/htmlRoutes.js");
var apiRoute = require("./app/routing/apiRoutes.js")


var PORT = 3113;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/",htRoute);
app.use("/survey",htRoute);
app.use("/api/friends",apiRoute)

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});


// These routes / data need to be moved to the apiRoutes file
//-----------------------------------------------------------------

// app.get("/api/friends", function(req, res) {
//     res.json(friends);
// });

// app.post("/api/friends", function(req,res){
//     var curUser=req.body;
//     var mostCompat;
//     var dbDiff=40;
//     var dupl=false;
//     for (i=0;i<friends.length;i++){
//         if(friends[i].email==curUser.email){
//             dupl=true;break;
//         }else{
//             var curFriendDiff=0;
//             for (j=0;j<10;j++){
//                 curFriendDiff+=Math.abs(friends[i].scores[j]-curUser.scores[j]);
//             }
//             if (curFriendDiff<dbDiff){
//                 dbDiff=curFriendDiff;
//                 mostCompat=friends[i];
//             }
//         }    
//     }
//     if (dupl){
//         mostCompat=curUser;
//         res.json(mostCompat);
//     }else{
//         curUser.inScore=dbDiff;
//         curUser.lastBestFit=dbDiff;
//         mostCompat.lastBestFit=dbDiff;
//         friends.push(curUser);
//         res.json(mostCompat);
//     }
// })
//-----------------------------------------------------------------
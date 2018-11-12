// GET route with url "/api/friends" shows all friends in JSON format
app.get("/api/friends", function(req, res) {
    res.json(friends);
    //res.end("That was an API (GET) call");
});

app.post("/api/friends", function(req,res){
    res.end("That was a POST");
});




// POST route with url "/api/friends" handles incoming survey results and compatibility logic
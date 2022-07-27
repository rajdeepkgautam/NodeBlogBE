const express = require("express");
const app = express();
const dataRouter = require("./Route/data");

// app.get('/home', function (req,res) {
//     res.send("Hi There!");
    
// })

app.use("/api", dataRouter);

app.listen(9009, function(){
    console.log("Sever Started");
})
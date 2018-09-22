const path = require("path");
const publicpath =  path.join(__dirname,"../public");
const express = require("express");

console.log(publicpath);
console.log(__dirname+"/../public");

var port =  process.env.PORT;
var app = express();
app.use(express.static(publicpath));

app.listen(port,()=>{
    console.log(`connection is up on port ${port}`);
});





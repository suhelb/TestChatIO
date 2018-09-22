const path = require("path");
const publicpath =  path.join(__dirname,"../public");
const express = require("express");

console.log(publicpath);
console.log(__dirname+"/../public");

var app = express();
app.use(express.static(publicpath));

app.listen(3000,()=>{
    console.log("Connection is up");
});





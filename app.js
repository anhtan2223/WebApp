const express = require('express');
const app = express();

app.get("/",(req,res)=>
{
  res.send("Hello World");
})

app.listen(3000,()=>
{
  console.log("Port 3000 lis listening Hiii !!");
})
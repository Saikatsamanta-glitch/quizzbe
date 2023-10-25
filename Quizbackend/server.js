// how to create server
// http | express framework
// es6 <--- 
const express  = require('express');
// function ---> return
const app = express();
require('./database/conn');
const quiz_Data = require('./database/quizModel');


// route / get
app.get('/',async(req,res)=>{
        const responses =await quiz_Data.find();
        res.json(responses)
})

app.listen( 5000 , ()=>{
        console.log("Connected to port 5000 🔥");
} )
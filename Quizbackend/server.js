const express  = require('express');
const app = express();
require('dotenv').config();
require('./database/conn');
const quiz_Data = require('./database/quizModel');
const port = 5000 || process.env.PORT;


// route / get
app.get('/',async(req,res)=>{
        const responses =await quiz_Data.find();
        res.json(responses)
})

app.listen( port , ()=>{
        console.log(`Connected to port ${port} 🔥`);
} )
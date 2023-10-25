const mongoose = require('mongoose');

const quiz_schema = new mongoose.Schema({
        id:{type:String, required:true, unique:true },
        title:{type:String, required:true},
        img:{type:String, required:true},
        quizQuestion:{type:Array}
})



module.exports =  new mongoose.model('Questionset',quiz_schema)
// Book ---> books
// Question ---> questions
// Questionset ---> questionsets
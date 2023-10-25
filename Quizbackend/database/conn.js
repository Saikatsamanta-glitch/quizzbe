const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://js123:js123@littleninja.23n9fqw.mongodb.net/quizzz')
.then(()=>{
        console.log('Connected to database 🌱');
})
.catch(()=>{
        console.log('Disconnected from DB');
})
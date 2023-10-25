const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_STRING)
.then(()=>{
        console.log('Connected to database 🌱');
})
.catch(()=>{
        console.log('Disconnected from DB');
});

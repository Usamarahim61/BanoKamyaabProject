const mongoose = require('mongoose');

const DB = process.env.DATABASE;

mongoose.set("strictQuery", false);

mongoose.connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex:true,
    useUnifiedTopology:true,
    // useFindAndModify:false
}).then(() =>{
    console.log('Connection successfull');
}).catch((err) => console.log(err));
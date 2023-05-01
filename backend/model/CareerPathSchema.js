const mongoose = require("mongoose");

const CareerPathSchema = new mongoose.Schema({
    photo:{
        type:String,
        // required:true
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },

});

const CareerPaths =new mongoose.model("CareerPath",CareerPathSchema)


const careerpath = mongoose.model('CAREERPATH', CareerPathSchema);
// module.exports =User;
module.exports = careerpath;



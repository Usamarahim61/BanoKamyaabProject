const mongoose = require("mongoose");

const DegreeSchema = new mongoose.Schema({
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

const Degrees =new mongoose.model("Degree",DegreeSchema)


const Degree = mongoose.model('DEGREE', DegreeSchema);
// module.exports =User;
module.exports = Degree;



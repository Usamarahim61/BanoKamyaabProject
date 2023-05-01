const mongoose = require("mongoose");

const ScholarshipSchema = new mongoose.Schema({
    photo:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },

});

const Scholarships =new mongoose.model("Scholarship",ScholarshipSchema)


const Scholarship = mongoose.model('SCHOLARSHIP', ScholarshipSchema);
// module.exports =User;
module.exports = Scholarship;



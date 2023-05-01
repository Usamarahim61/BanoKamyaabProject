const mongoose = require("mongoose");

const UniversitySchema = new mongoose.Schema({
    photo:{
        type:String,
        // required:true
        
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    field: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },


},
{timestamps: true}
);

// const UniversitySchema = new mongoose.Schema({
//     name:{
//         type:String,
//         required:true
//     },
//     description:{
//         type:String,
//         required:true
//     },
//     url:{
//         type:String,
//         required:true
//     },
//     field:{
//         type:String,
//         required:true
//     },
//     city:{
//         type:String,
//         required:true
//     }
// });

// const Users =new mongoose.model("User",userSchema)
const Universities = new mongoose.model("University", UniversitySchema)




// const User = mongoose.model('USER', userSchema);
const University = mongoose.model('UNIVERSITY', UniversitySchema);
// module.exports =User;
module.exports = University;



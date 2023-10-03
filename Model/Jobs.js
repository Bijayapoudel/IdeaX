const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema;


const jobSchema = new mongoose.Schema({

    name :{
        type : String,
        maxlength : 300,
        required : true
    },
    category: {
         type : String,
    },
    language:{
        type : String,
    },

    date_created : {
        type : Date,
        default : Date.now,
        required: true,
    },
    // end_date : {
    //     type : Date,
    //     required : true,
    // },
    vacency : {
        type : Number,
        required : true,
    },
    location : {
        type : String,
        required: true,
    },
    created_by : {
        type : ObjectId,
        required : true,
        ref:"user"
    },
    description:{
        type : String,
    },
    images: {
    type: [String], // Array of strings
  },


});
module.exports = mongoose.model("Jobs",jobSchema)
const mongoose = require('mongoose')

// define schema
const Positionschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
 
    },
    email: {
        type: String,
        required: true,

    },
    mobile_no: {
        type: String,
        required: true,

    },
    salary: {
        type: Number,
        required: true,

    },
    city: {
        type: String,
        required: true,

    },
    country: {
        type: String,
        required: true,

    },
    department: {
        type: String,
        required: true,

    },
    role:{
        type: String,
        default:"user",

    },
    user_id: {
      type: String,
      required: true
  
  },
}, { timestamps: true })

const positionModal = mongoose.model('position', Positionschema)

module.exports = positionModal
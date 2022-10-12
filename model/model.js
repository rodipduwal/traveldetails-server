// Requiring module
const mongoose = require('mongoose');

// registration Modal Schema
const careerSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    address: String,
    applying_for: String
})
  
// Creating model objects
const Careers = mongoose.model('careers', careerSchema);
     
// Exporting our model objects
module.exports = {
    Careers
}
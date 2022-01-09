const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let School = new Schema({
  school_name: {
    type: String
  },
  school_address: {
    type: String
  },
  teachers_count: {
    type: Number
  },
  students_count: {
    type: Number
  },


},{
    collection: 'school'
});

module.exports = mongoose.model('School', School);
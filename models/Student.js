const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Define collection and schema for Business
let Student = new Schema({
  student_name: {
    type: String
  },
  phone_number: {
    type: Number
  },
  _schoolId: {
    type: Number
  },
  class: {
    type: String
  },
  section: {
    type: String
  },
  createdDate: {
    type: Date
  },


},{
    collection: 'student'
});

module.exports = mongoose.model('Student', Student);
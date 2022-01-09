const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Teacher = new Schema({
  teacher_name: {
    type: String
  },
  classname: {
    type: String
  },
  section: {
    type: Number
  },

  subject:{
    type: String,
    required: true
    },
    _schoolId:{
      type: mongoose.Types.ObjectId,
      required: true
      }
},{
    collection: 'teacher'
});

module.exports = mongoose.model('Teacher', Teacher);
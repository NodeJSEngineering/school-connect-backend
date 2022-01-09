const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Assignment = new Schema({
  topic_name: {
    type: String
  },
  _classId: {
    type: String

  },
  assignment_desc: {
    type: String
  },
  subjects: {
    type: Array
  },
  assignment_title: {
    type: String
  },
  due_date: {
    type: Date
  },
  assignment_desc: {
    type: String
  },
  assignment_file: {
    type: String
  },
  marks: {
    type: Number
  },
  total_marks: {
    type: Number
  }, 
  assignment_type: {
    type: String
  },
  assignments: {
    type: Array
  },
  classes: {
    type: Array
  },
  _teacherid: {
    type: Number
  },
  _teacherid: {
    type: Number
  },
  createddate: {
    type: Date
  }
},{
    collection: 'assignment'
});

module.exports = mongoose.model('Assignment', Assignment);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
  note_type: {
    type: String
  },
  note_link: {
    type: String
  },
  subject: {
    type: Number
  },

  classes:{
    type: String,
    },
    subjects: {
      type: Array
    },
    
    _teacherid: {
      type: Number
    },
  
    created_date:{
      type: String,
      }
},{
    collection: 'business'
});

module.exports = mongoose.model('Business', Business);
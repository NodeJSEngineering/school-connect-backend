const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Define collection and schema for Business
let User = new Schema({
  username: {
    type: String, unique: true, required: true
  },
  user_email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },

  role:{
    type: String,
    required: true
    },
    hash: { type: String },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },

    class: {
      type: String
    },
    section: {
      type: String
    },
  
},{
    collection: 'user'
});

User.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
      delete ret._id;
      delete ret.hash;
  }
});

module.exports = mongoose.model('User', User);
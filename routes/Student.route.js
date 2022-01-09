const express = require('express');
const app = express();
const businessRoutes = express.Router();
const path = require('path');


// Require Business model in our routes module
let Student = require('../models/Student');

// Defined store route // To create a new route 
businessRoutes.route('/add').post(function (req, res) {
  let st = new Student(req.body);
  st.save(function (err, savedJob) {
    if (err) {
      return  res.status(400).send("unable to save to database" + err);
    } else {
       return res.status(200).json({'business': 'added successfully'});
    }
  })
});

// Defined get data(index or listing) route
businessRoutes.route('/').get(function (req, res) {
    Student.find(function (err, businesses){
    if(err){
      console.log(err);
    }
    else {
      res.json(businesses);
    }
  });
});

module.exports = businessRoutes;

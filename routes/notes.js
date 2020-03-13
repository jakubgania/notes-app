'use strict';

var util = require('util');
var express = require('express');
var router = express.Router();
var notes = require('../models/notes-memory');

router.get('/add', (req, res, next) => {
  res.render('noteedit', {
    title: "Dodaj notatke",
    docreate: true,
    notekey: "",
    note: undefined
  });
});

module.exports = router;
// 'use strict';

// var util = require('util');
var express = require('express');
var router = express.Router();
// var notes = require('../models/notes-memory');

router.get('/add', (req, res, next) => {
  res.render('noteedit', {
    title: "Dodaj notatke",
    docreate: true,
    notekey: "",
    note: undefined
  });
});

router.post('/save', (req, res, next) => {
  var p;
  if (req.body.docreate === "create") {
    p = notes.docreate(req.body.notekey, req.body.title, req.body.body);
  } else {
    p = notes.update(req.body.notekey, req.body.title, req.body.body);
  }
  p.then(note => {
    res.redirect('/notes/view?key=' + req.body.notekey);
  })
  .catch(err => { next(err) });
});

module.exports = router;
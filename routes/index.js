var express = require('express');
var router = express.Router();
var notes = require('../models/notes-memory');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('test');
  notes.keylist()
  .then(keylist => {
    var keyPromises = [];
    for(var key of keylist) {
      keyPromises.push(
        notes.read(key)
          .then(note => {
            return { key: note.key, title: note.title };
          })
      );
    }
    return Promise.all(keyPromises);
  })
  .then(notelist => {
    console.log(notelist);
    res.render('index', {
      title: 'Notes App',
      notelist: notelist
    });
  })
  .catch(err => { next(err); });
});

module.exports = router; 
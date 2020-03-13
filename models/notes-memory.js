'use strict'

let notes = [];
const Note = require('./Note');

exports.update = exports.create = function(key, title, body) {
  return new Promise((resolve, reject) => {
    notes[key] = new Note(key, title, body);
    resolve(notes[key]);
  });
};

exports.read = function(key) {
  return new Promise((resolve, reject) => {
    if (notes[key]) resolve(notes[key]);
    else reject(`Notatka o kluczu ${key} nie istnieje`);
  });
};

exports.destroy = function(key) {
  return new Promise((resolve, reject) => {
    if (notes[key]) {
      delete notes[key];
      resolve();
    } else reject(`Notatka o kluczu ${key} nie istnieje`);
  });
};

exports.keylist = function() {
  return new Promise((resolve, reject) => {
    resolve(Object.keys(notes));
  });
};

exports.count = function() {
  return new Promise((resolve, reject) => {
    resolve(notes.length);
  });
};
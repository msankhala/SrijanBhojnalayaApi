'use strict';

var _ = require('lodash');
var Attendance = require('./attendance.model');

// Get list of attendances
exports.index = function(req, res) {
  Attendance.find(function (err, attendances) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(attendances);
  });
};

// Get a single attendance
exports.show = function(req, res) {
  Attendance.findById(req.params.id, function (err, attendance) {
    if(err) { return handleError(res, err); }
    if(!attendance) { return res.status(404).send('Not Found'); }
    return res.json(attendance);
  });
};

// Creates a new attendance in the DB.
exports.create = function(req, res) {
  Attendance.create(req.body, function(err, attendance) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(attendance);
  });
};

// Updates an existing attendance in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Attendance.findById(req.params.id, function (err, attendance) {
    if (err) { return handleError(res, err); }
    if(!attendance) { return res.status(404).send('Not Found'); }
    var updated = _.merge(attendance, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(attendance);
    });
  });
};

// Deletes a attendance from the DB.
exports.destroy = function(req, res) {
  Attendance.findById(req.params.id, function (err, attendance) {
    if(err) { return handleError(res, err); }
    if(!attendance) { return res.status(404).send('Not Found'); }
    attendance.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
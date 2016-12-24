/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
// Insert seed models below
var Attendance = require('../api/attendance/attendance.model');
var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

// Insert seed data below
var attendanceSeed = require('../api/attendance/attendance.seed.json');
var thingSeed = require('../api/thing/thing.seed.json');

// Insert seed inserts below
Attendance.find({}).remove(function() {
	Attendance.create(attendanceSeed);
});

Thing.find({}).remove(function() {
  Thing.create(thingSeed);
});
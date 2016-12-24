'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AttendanceSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Attendance', AttendanceSchema);
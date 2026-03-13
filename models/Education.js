const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
  badge:    { type: String, required: true },
  degree:   { type: String, required: true },
  school:   { type: String, required: true },
  location: { type: String, required: true },
  year:     { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Education', EducationSchema);

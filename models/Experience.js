const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
  company:  { type: String, required: true },
  role:     { type: String, required: true },
  location: { type: String, required: true },
  period:   { type: String, required: true },
  open:     { type: Boolean, default: false },
  bullets:  { type: [String], default: [] },
  tech:     { type: [String], default: [] }
}, { timestamps: true });

module.exports = mongoose.model('Experience', ExperienceSchema);

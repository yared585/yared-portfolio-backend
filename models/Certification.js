const mongoose = require('mongoose');

const CertificationSchema = new mongoose.Schema({
  icon:   { type: String, required: true },
  name:   { type: String, required: true },
  issuer: { type: String, required: true },
  year:   { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Certification', CertificationSchema);

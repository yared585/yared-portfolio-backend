const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  name:        { type: String, required: true },
  tagline:     { type: String, default: '' },
  description: { type: String, default: '' },
  category:    { type: String, default: '' },
  tech:        { type: [String], default: [] },
  features:    { type: [String], default: [] },
  liveUrl:     { type: String, default: '' },
  repoUrl:     { type: String, default: '' },
  imageUrl:    { type: String, default: '' },
  status:      { type: String, default: 'In Development' }
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);

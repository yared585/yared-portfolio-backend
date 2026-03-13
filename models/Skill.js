const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
  icon: { type: String, required: true },
  name: { type: String, required: true },
  tags: { type: [String], default: [] }
}, { timestamps: true });

module.exports = mongoose.model('Skill', SkillSchema);

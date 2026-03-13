const Skill = require('../models/Skill');

const findAll  = ()           => Skill.find().sort({ createdAt: 1 });
const findById = (id)         => Skill.findById(id);
const create   = (data)       => Skill.create(data);
const update   = (id, data)   => Skill.findByIdAndUpdate(id, data, { new: true, runValidators: true });
const remove   = (id)         => Skill.findByIdAndDelete(id);

module.exports = { findAll, findById, create, update, remove };

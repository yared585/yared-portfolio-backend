const Experience = require('../models/Experience');

const findAll  = ()           => Experience.find().sort({ createdAt: 1 });
const findById = (id)         => Experience.findById(id);
const create   = (data)       => Experience.create(data);
const update   = (id, data)   => Experience.findByIdAndUpdate(id, data, { new: true, runValidators: true });
const remove   = (id)         => Experience.findByIdAndDelete(id);

module.exports = { findAll, findById, create, update, remove };

const Project = require('../models/Project');

const findAll  = ()           => Project.find().sort({ createdAt: 1 });
const findById = (id)         => Project.findById(id);
const create   = (data)       => Project.create(data);
const update   = (id, data)   => Project.findByIdAndUpdate(id, data, { new: true, runValidators: true });
const remove   = (id)         => Project.findByIdAndDelete(id);

module.exports = { findAll, findById, create, update, remove };

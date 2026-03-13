const Education = require('../models/Education');

const findAll  = ()           => Education.find().sort({ createdAt: 1 });
const findById = (id)         => Education.findById(id);
const create   = (data)       => Education.create(data);
const update   = (id, data)   => Education.findByIdAndUpdate(id, data, { new: true, runValidators: true });
const remove   = (id)         => Education.findByIdAndDelete(id);

module.exports = { findAll, findById, create, update, remove };

const Certification = require('../models/Certification');

const findAll  = ()           => Certification.find().sort({ createdAt: 1 });
const findById = (id)         => Certification.findById(id);
const create   = (data)       => Certification.create(data);
const update   = (id, data)   => Certification.findByIdAndUpdate(id, data, { new: true, runValidators: true });
const remove   = (id)         => Certification.findByIdAndDelete(id);

module.exports = { findAll, findById, create, update, remove };

const educationRepository = require('../repositories/education.repository');

const getAll    = ()           => educationRepository.findAll();
const getById   = (id)         => educationRepository.findById(id);
const create    = (data)       => educationRepository.create(data);
const update    = (id, data)   => educationRepository.update(id, data);
const remove    = (id)         => educationRepository.remove(id);

module.exports = { getAll, getById, create, update, remove };

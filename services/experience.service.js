const experienceRepository = require('../repositories/experience.repository');

const getAll    = ()           => experienceRepository.findAll();
const getById   = (id)         => experienceRepository.findById(id);
const create    = (data)       => experienceRepository.create(data);
const update    = (id, data)   => experienceRepository.update(id, data);
const remove    = (id)         => experienceRepository.remove(id);

module.exports = { getAll, getById, create, update, remove };

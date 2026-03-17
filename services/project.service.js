const projectRepository = require('../repositories/project.repository');

const getAll    = ()           => projectRepository.findAll();
const getById   = (id)         => projectRepository.findById(id);
const create    = (data)       => projectRepository.create(data);
const update    = (id, data)   => projectRepository.update(id, data);
const remove    = (id)         => projectRepository.remove(id);

module.exports = { getAll, getById, create, update, remove };

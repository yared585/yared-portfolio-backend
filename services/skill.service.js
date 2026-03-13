const skillRepository = require('../repositories/skill.repository');

const getAll    = ()           => skillRepository.findAll();
const getById   = (id)         => skillRepository.findById(id);
const create    = (data)       => skillRepository.create(data);
const update    = (id, data)   => skillRepository.update(id, data);
const remove    = (id)         => skillRepository.remove(id);

module.exports = { getAll, getById, create, update, remove };

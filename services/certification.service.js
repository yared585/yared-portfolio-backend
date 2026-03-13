const certificationRepository = require('../repositories/certification.repository');

const getAll    = ()           => certificationRepository.findAll();
const getById   = (id)         => certificationRepository.findById(id);
const create    = (data)       => certificationRepository.create(data);
const update    = (id, data)   => certificationRepository.update(id, data);
const remove    = (id)         => certificationRepository.remove(id);

module.exports = { getAll, getById, create, update, remove };

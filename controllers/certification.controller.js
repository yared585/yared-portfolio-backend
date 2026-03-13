const certificationService = require('../services/certification.service');

const getAll = async (req, res) => {
  try {
    const certifications = await certificationService.getAll();
    res.json(certifications);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

const getById = async (req, res) => {
  try {
    const cert = await certificationService.getById(req.params.id);
    if (!cert) return res.status(404).json({ message: 'Certification not found' });
    res.json(cert);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

const create = async (req, res) => {
  try {
    const cert = await certificationService.create(req.body);
    res.status(201).json(cert);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

const update = async (req, res) => {
  try {
    const cert = await certificationService.update(req.params.id, req.body);
    if (!cert) return res.status(404).json({ message: 'Certification not found' });
    res.json(cert);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

const remove = async (req, res) => {
  try {
    const cert = await certificationService.remove(req.params.id);
    if (!cert) return res.status(404).json({ message: 'Certification not found' });
    res.json({ message: 'Certification deleted' });
  } catch (err) { res.status(500).json({ message: err.message }); }
};

module.exports = { getAll, getById, create, update, remove };

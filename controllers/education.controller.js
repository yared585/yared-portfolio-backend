const educationService = require('../services/education.service');

const getAll = async (req, res) => {
  try {
    const education = await educationService.getAll();
    res.json(education);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

const getById = async (req, res) => {
  try {
    const edu = await educationService.getById(req.params.id);
    if (!edu) return res.status(404).json({ message: 'Education not found' });
    res.json(edu);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

const create = async (req, res) => {
  try {
    const edu = await educationService.create(req.body);
    res.status(201).json(edu);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

const update = async (req, res) => {
  try {
    const edu = await educationService.update(req.params.id, req.body);
    if (!edu) return res.status(404).json({ message: 'Education not found' });
    res.json(edu);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

const remove = async (req, res) => {
  try {
    const edu = await educationService.remove(req.params.id);
    if (!edu) return res.status(404).json({ message: 'Education not found' });
    res.json({ message: 'Education deleted' });
  } catch (err) { res.status(500).json({ message: err.message }); }
};

module.exports = { getAll, getById, create, update, remove };

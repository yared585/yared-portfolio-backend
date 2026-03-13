const experienceService = require('../services/experience.service');

const getAll = async (req, res) => {
  try {
    const experiences = await experienceService.getAll();
    res.json(experiences);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

const getById = async (req, res) => {
  try {
    const experience = await experienceService.getById(req.params.id);
    if (!experience) return res.status(404).json({ message: 'Experience not found' });
    res.json(experience);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

const create = async (req, res) => {
  try {
    const experience = await experienceService.create(req.body);
    res.status(201).json(experience);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

const update = async (req, res) => {
  try {
    const experience = await experienceService.update(req.params.id, req.body);
    if (!experience) return res.status(404).json({ message: 'Experience not found' });
    res.json(experience);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

const remove = async (req, res) => {
  try {
    const experience = await experienceService.remove(req.params.id);
    if (!experience) return res.status(404).json({ message: 'Experience not found' });
    res.json({ message: 'Experience deleted' });
  } catch (err) { res.status(500).json({ message: err.message }); }
};

module.exports = { getAll, getById, create, update, remove };

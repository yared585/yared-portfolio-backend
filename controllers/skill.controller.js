const skillService = require('../services/skill.service');

const getAll = async (req, res) => {
  try {
    const skills = await skillService.getAll();
    res.json(skills);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

const getById = async (req, res) => {
  try {
    const skill = await skillService.getById(req.params.id);
    if (!skill) return res.status(404).json({ message: 'Skill not found' });
    res.json(skill);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

const create = async (req, res) => {
  try {
    const skill = await skillService.create(req.body);
    res.status(201).json(skill);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

const update = async (req, res) => {
  try {
    const skill = await skillService.update(req.params.id, req.body);
    if (!skill) return res.status(404).json({ message: 'Skill not found' });
    res.json(skill);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

const remove = async (req, res) => {
  try {
    const skill = await skillService.remove(req.params.id);
    if (!skill) return res.status(404).json({ message: 'Skill not found' });
    res.json({ message: 'Skill deleted' });
  } catch (err) { res.status(500).json({ message: err.message }); }
};

module.exports = { getAll, getById, create, update, remove };

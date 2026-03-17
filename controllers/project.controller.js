const projectService = require('../services/project.service');

const getAll = async (req, res) => {
  try {
    const projects = await projectService.getAll();
    res.json(projects);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

const getById = async (req, res) => {
  try {
    const project = await projectService.getById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json(project);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

const create = async (req, res) => {
  try {
    const project = await projectService.create(req.body);
    res.status(201).json(project);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

const update = async (req, res) => {
  try {
    const project = await projectService.update(req.params.id, req.body);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json(project);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

const remove = async (req, res) => {
  try {
    const project = await projectService.remove(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json({ message: 'Project deleted' });
  } catch (err) { res.status(500).json({ message: err.message }); }
};

module.exports = { getAll, getById, create, update, remove };

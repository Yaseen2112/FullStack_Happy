const Project = require('../models/Project');
const { cropAndSave } = require('../utils/imageCropper');

exports.getProjects = async (req, res, next) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.json(projects);
    } catch (err) {
        next(err);
    }
};

exports.createProject = async (req, res, next) => {
    try {
        const { name, description } = req.body;
        if (!req.file) return res.status(400).json({ message: 'Image is required' });

        const filename = Date.now() + '-' + req.file.originalname;
        const imageUrl = await cropAndSave(req.file.buffer, 'projects', filename);

        const project = await Project.create({ name, description, imageUrl });
        res.status(201).json(project);
    } catch (err) {
        next(err);
    }
};

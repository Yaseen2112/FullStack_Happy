const Client = require('../models/Client');
const { cropAndSave } = require('../utils/imageCropper');

exports.getClients = async (req, res, next) => {
    try {
        const clients = await Client.find().sort({ createdAt: -1 });
        res.json(clients);
    } catch (err) {
        next(err);
    }
};

exports.createClient = async (req, res, next) => {
    try {
        const { name, designation, description } = req.body;
        if (!req.file) return res.status(400).json({ message: 'Image is required' });

        const filename = Date.now() + '-' + req.file.originalname;
        const imageUrl = await cropAndSave(req.file.buffer, 'clients', filename);

        const client = await Client.create({ name, designation, description, imageUrl });
        res.status(201).json(client);
    } catch (err) {
        next(err);
    }
};

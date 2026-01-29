const Contact = require('../models/Contact');

exports.getContacts = async (req, res, next) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.json(contacts);
    } catch (err) {
        next(err);
    }
};

exports.createContact = async (req, res, next) => {
    try {
        const { fullName, email, mobile, city } = req.body;
        const contact = await Contact.create({ fullName, email, mobile, city });
        res.status(201).json(contact);
    } catch (err) {
        next(err);
    }
};

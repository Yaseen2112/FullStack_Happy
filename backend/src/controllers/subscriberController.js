const Subscriber = require('../models/Subscriber');

exports.getSubscribers = async (req, res, next) => {
    try {
        const subs = await Subscriber.find().sort({ createdAt: -1 });
        res.json(subs);
    } catch (err) {
        next(err);
    }
};

exports.createSubscriber = async (req, res, next) => {
    try {
        const { email } = req.body;
        const sub = await Subscriber.create({ email });
        res.status(201).json(sub);
    } catch (err) {
        if (err.code === 11000) {
            return res.status(409).json({ message: 'Email already subscribed' });
        }
        next(err);
    }
};

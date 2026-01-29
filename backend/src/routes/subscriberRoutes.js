const express = require('express');
const router = express.Router();
const { getSubscribers, createSubscriber } = require('../controllers/subscriberController');

router.get('/', getSubscribers);
router.post('/', createSubscriber);

module.exports = router;

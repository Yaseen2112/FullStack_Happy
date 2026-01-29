const express = require('express');
const router = express.Router();
const upload = require('../utils/upload');
const { getClients, createClient } = require('../controllers/clientController');

router.get('/', getClients);
router.post('/', upload.single('image'), createClient);

module.exports = router;

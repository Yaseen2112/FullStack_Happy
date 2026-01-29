const express = require('express');
const router = express.Router();
const upload = require('../utils/upload');
const { getProjects, createProject } = require('../controllers/projectController');

router.get('/', getProjects);
router.post('/', upload.single('image'), createProject);

module.exports = router;

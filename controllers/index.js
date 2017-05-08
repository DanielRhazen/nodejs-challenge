const express = require('express');

const router = express.Router();

router.use('/projects', require('./projects'));

router.use('/projects-at-risk', require('./projects-at-risk'));

module.exports = router;

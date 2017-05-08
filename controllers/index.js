const express = require('express');

const router = express.Router();

router.use('/projects', require('./projects'));

//Novo endpoint que apresenta os de projetos classificados como status de risco
router.use('/projects-at-risk', require('./projects-at-risk')); 

module.exports = router;

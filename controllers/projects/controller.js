const projectsService = require('../../services/projects');

function get(req, res) {
  const projects = projectsService.findAll();
  return res.status(200).json(projects);
}

function post(req, res) {
  if (projectsService.create(req.body)){
    return res.status(201).json({ message: 'Project Created' });  
  } else {
    return res.status(400).json({ message: 'Missing ProjectName' });
  }
}

module.exports = { get, post };

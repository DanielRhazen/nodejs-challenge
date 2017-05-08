const projectsService = require('../../services/projects');

function get(req, res) {
  const projects = projectsService.findProjectsAtRisk();
  return res.status(200).json(projects);
}

module.exports = { get };
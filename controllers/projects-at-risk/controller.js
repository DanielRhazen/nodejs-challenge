const projectsService = require('../../services/projects');

function get(req, res) {
  const projects = projectsService.findProjectsAtRisk();
  return res.json(projects);
}

module.exports = { get };
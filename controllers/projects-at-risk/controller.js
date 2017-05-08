const projectsService = require('../../services/projects');

//GET que retorna os projetos em risco
function get(req, res) {
  const projectsAtRisk = projectsService.findProjectsAtRisk();
  return res.status(200).json(projectsAtRisk);
}

module.exports = { get };
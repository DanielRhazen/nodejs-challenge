const Projects = require('../../repository/projects');

function create(project) {
  return Projects.create(project);
}

function findAll() {
  return Projects.findAll();
}

function findProjectsAtRisk(){
  return Projects.findProjectsAtRisk();
}

module.exports = { create, findAll, findProjectsAtRisk };

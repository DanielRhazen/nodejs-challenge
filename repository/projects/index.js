const projects = require('./data').projects;

function create(project) {
  if (project.name !== '' && project.name !== undefined) {
    projects.push(project);
    return true;
  }
  return false;
}

function findAll() {
  return projects;
}

module.exports = { create, findAll };

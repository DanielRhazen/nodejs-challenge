const projects = require('./data').projects;

const projectsAtRisk = [];

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

function findProjectsAtRisk() {

  let yellow;
  let red;

  for(var i = 0; i < projects.length; i++){

    red = 0;
    yellow = 0;

    for(var j = 0; j < projects[i].reports.length; j++){

      if(projects[i].reports[j] === 'Yellow'){
        yellow++;
      }
      
      if(projects[i].reports[j] === 'Red'){
        red++;
      }
    }

    if(red >= 1 || yellow >= 2){
      projectsAtRisk.push(projects[i]);
    }
  }
  return projectsAtRisk;
}

module.exports = { create, findAll, findProjectsAtRisk };

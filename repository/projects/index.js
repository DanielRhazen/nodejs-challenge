const projects = require('./data').projects;

/* A função create passa a retornar um valor booleano pois quando for acionada pelo metodo POST 
no endpoint seja possível verificar se foi criado ou nao um novo projeto */
function create(project) {
  if (project.name !== '' && project.name !== undefined && project.name !== ' ') { // Verificação se há nome
    projects.push(project); // Adiciona na lista geral de projetos normalmente
    return true; 
  }
  return false;
}

function findAll() {
  return projects;
}

//Função que popula a lista de projetos em risco e a retorna
function findProjectsAtRisk() {
  // Inicialização das variaveis que serão usadas como contadores
  let yellow;
  let red;
  const projectsAtRisk = []; //Lista de projetos classificados como de risco

  //Itera sobre os projetos da lista geral
  for(var i = 0; i < projects.length; i++){

    red = 0;
    yellow = 0;

    //Itera sobre os reports de cada projeto
    for(var j = 0; j < projects[i].reports.length; j++){

      //Verifica da quantidade de reports relevantes para que um projeto seja classificado como de risco ou não
      if(projects[i].reports[j] === 'Yellow'){
        yellow++;
      }

      if(projects[i].reports[j] === 'Red'){
        red++;
      }
    }

    //Verifica se o projeto esta em estado de risco
    if(red >= 1 || yellow >= 2){
      //Adiciona o projeto em estado de risco para a respectiva lista
      projectsAtRisk.push(projects[i]);
    }
  }
  return projectsAtRisk;
}

module.exports = { create, findAll, findProjectsAtRisk };

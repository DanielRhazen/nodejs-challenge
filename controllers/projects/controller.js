const projectsService = require('../../services/projects');

function get(req, res) {
  const projects = projectsService.findAll();
  return res.status(200).json(projects); //Status 200 OK
}

function post(req, res) {
  if (projectsService.create(req.body)){
    return res.status(201).json({ message: 'Project Created' });  //Status HTTP 201 Created
  } else {
    //Status HTTP 400 Bad Request (aparentemente é o status apropriado, mas tenho ressalvas quanto a isso)
    return res.status(400).json({ message: 'Missing Project Name' }); 
  }
}

module.exports = { get, post };

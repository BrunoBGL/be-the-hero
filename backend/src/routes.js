const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const {
  createOngValidator,
  createIncidentValidator,
  indexIncidentValidator,
  deleteIncidentValidator,
  indexProfileValidator,
  createSessionValidator
} = require('./validators/validators');

const routes = express.Router();

routes.post('/ongs', createOngValidator, OngController.create);
routes.get('/ongs', OngController.index);

routes.post('/incidents', createIncidentValidator, IncidentController.create);
routes.get('/incidents', indexIncidentValidator, IncidentController.index);
routes.delete('/incidents/:id', deleteIncidentValidator, IncidentController.delet);

routes.get('/profile', indexProfileValidator, ProfileController.index);

routes.post('/session', createSessionValidator, SessionController.create);

module.exports = routes;
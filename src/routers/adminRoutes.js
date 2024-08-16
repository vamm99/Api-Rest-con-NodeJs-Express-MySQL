import express from 'express';
import {
  RegistrarAdministradorController,
  loginAdministradorcontroller
} from '../controllers/adminController.js';

const routes = express.Router();

routes.post('/', RegistrarAdministradorController);
routes.post('/login', loginAdministradorcontroller);

export default routes;

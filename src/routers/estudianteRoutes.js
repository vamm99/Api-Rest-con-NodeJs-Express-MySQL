import express from 'express';
import {
  consultarEstudiantes,
  consultarEstudiantePorId,
  agregarEstudiante,
  actualizarEstudiante,
  eliminarEstudiante
} from '../controllers/estudianteController.js';
import { authenticateToken } from '../middleware/jwtverificacion.js';

const routes = express.Router();

routes.get('/', authenticateToken, consultarEstudiantes);
routes.post('/', authenticateToken, agregarEstudiante);

routes
  .route('/:id')
  .get(consultarEstudiantePorId)
  .put(actualizarEstudiante)
  .delete(eliminarEstudiante);

export default routes;

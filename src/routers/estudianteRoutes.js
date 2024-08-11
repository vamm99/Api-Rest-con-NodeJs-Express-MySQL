import express from 'express';
import {
  consultarEstudiantes,
  consultarEstudiantePorId,
  agregarEstudiante,
  actualizarEstudiante,
  eliminarEstudiante
} from '../controllers/estudianteController.js';

const routes = express.Router();

routes.get('/', consultarEstudiantes);
routes.post('/', agregarEstudiante);

routes
  .route('/:id')
  .get(consultarEstudiantePorId)
  .put(actualizarEstudiante)
  .delete(eliminarEstudiante);

export default routes;

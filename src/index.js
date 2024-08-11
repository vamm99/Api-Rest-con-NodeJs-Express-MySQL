import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { envs } from './config/env.js';
import estudiantesRoutes from './routers/estudianteRoutes.js';

const app = express();
const port = envs.PORT;

/**
 * Middlewares
 */
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

/**
 * Routers
 */
app.use('/estudiantes', estudiantesRoutes);

/**
 * El servidor esta escuchando por el puerto 3000
 */
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Servidor activo');
});

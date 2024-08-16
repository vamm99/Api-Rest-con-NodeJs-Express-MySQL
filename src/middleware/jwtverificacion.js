import jwt from 'jsonwebtoken';
import { envs } from '../config/env.js';

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const bearerToken = authHeader && authHeader.split(' ')[1]; // Formato: "Bearer <token>"

  if (bearerToken == null) return res.sendStatus(401); // No autorizado si no hay token

  jwt.verify(bearerToken, envs.JWT_SECRET, (err, data) => {
    if (err) return res.sendStatus(403); // Prohibido si el token es inválido

    req.token = data; // Guarda la información del usuario en la solicitud
    next(); // Continúa con la siguiente función de middleware
  });
};

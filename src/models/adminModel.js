import jwt from 'jsonwebtoken';
import db from '../config/conexion.js';
import { envs } from '../config/env.js';

/**
 * Método para agregar un nuevo administrador
 */

export const RegistrarAdministrador = async (email, password) => {
  try {
    const [existrows] = await db.query(
      `SELECT * FROM administrador WHERE email = ?;`,
      [email]
    );

    if (existrows.length > 0) {
      return { message: 'Email ya exite' };
    }

    const [rows] = await db.query(
      `INSERT INTO administrador (id, email, password) VALUES (NULL, ?, ?)`,
      [email, password]
    );

    return rows;
  } catch (error) {
    throw new Error('Error al registrar el usuario ' + error.message);
  }
};

/**
 * Método para loguear un administrador
 */

export const loginAdministrador = async (email, password) => {
  try {
    const [rows] = await db.query(
      `SELECT * FROM administrador WHERE email = ?;`,
      [email]
    );

    if (rows.length === 0) {
      return { message: 'Admin no encontrado' };
    } else {
      //   const passwordAdmin = rows[0].password;
      //   const passwordCorrecta = await compare(password, passwordAdmin);
      //   if (!passwordCorrecta) {
      //     return { message: 'Contraseña incorrecta' };
      //   }

      const token = jwt.sign({ email: rows[0].email }, envs.JWT_SECRET, {
        expiresIn: '1h'
      });

      return { token, email: rows[0].email };
    }
  } catch (error) {
    throw new Error('Error al obtener estudiante por ID: ' + error.message);
  }
};

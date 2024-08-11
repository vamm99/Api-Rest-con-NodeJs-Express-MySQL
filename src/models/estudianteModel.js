import db from '../config/conexion.js';

/**
 * Método para obtener todos los estudiantes
 */

export const obtenerEstudiantes = async () => {
  try {
    const [rows] = await db.query(`SELECT * FROM estudiantes;`);
    return rows;
  } catch (error) {
    throw new Error('Error al obtener estudiantes: ' + error.message);
  }
};

/**
 * Método para traer el registro de un estudiante
 */

export const obtenerEstudiantePorId = async (id) => {
  try {
    const [rows] = await db.query(`SELECT * FROM estudiantes WHERE id = ?;`, [
      id
    ]);
    return rows[0];
  } catch (error) {
    throw new Error('Error al obtener estudiante por ID: ' + error.message);
  }
};

/**
 * Método para agregar un nuevo estudiante
 */

export const ingresarEstudiante = async (dni, nombre, apellido, email) => {
  try {
    const [result] = await db.query(
      `INSERT INTO estudiantes (id, dni, nombre, apellido, email) VALUES (NULL, ?, ?, ?, ?)`,
      [dni, nombre, apellido, email]
    );
    return result;
  } catch (error) {
    throw new Error('Error al ingresar el estudiante ' + error.message);
  }
};

/**
 * Método para actualizar un registro de estudiante
 */

export const actualizarEstudiantePorId = async (
  id,
  dni,
  nombre,
  apellido,
  email
) => {
  try {
    const [result] = await db.query(
      `UPDATE estudiantes SET dni = ?, nombre = ?, apellido = ?, email = ? WHERE id = ?`,
      [dni, nombre, apellido, email, id]
    );
    return result;
  } catch (error) {
    throw new Error(
      'Error al actualizar el estudiante Con en ese ID: ' + error.message
    );
  }
};

/**
 * Método para eliminar el registro de un estudiante
 */

export const eliminarEstudiantePorId = async (id) => {
  try {
    const [result] = await db.query(`DELETE FROM estudiantes WHERE id = ?;`, [
      id
    ]);
    return result;
  } catch (error) {
    throw new Error(
      'Error al eliminar el estudiante Con en ese ID: ' + error.message
    );
  }
};

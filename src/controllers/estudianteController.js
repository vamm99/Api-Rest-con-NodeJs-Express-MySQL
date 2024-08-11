import {
  obtenerEstudiantes,
  obtenerEstudiantePorId,
  ingresarEstudiante,
  actualizarEstudiantePorId,
  eliminarEstudiantePorId
} from '../models/estudianteModel.js';

/**
 * Métodos del CRUD que conecta el controlado con el modelo
 */

export const consultarEstudiantes = async (req, res) => {
  try {
    const estudiantes = await obtenerEstudiantes();
    res.status(200).json(estudiantes);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const consultarEstudiantePorId = async (req, res) => {
  const { id } = req.params;

  try {
    const estudiante = await obtenerEstudiantePorId(id);
    if (estudiante) {
      res.status(200).json(estudiante);
    } else {
      res.status(404).send('Estudiante no encontrado');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const agregarEstudiante = async (req, res) => {
  try {
    const { dni, nombre, apellido, email } = req.body;
    const estudiante = await ingresarEstudiante(dni, nombre, apellido, email);
    if (estudiante) {
      res.status(200).json({ id: estudiante.insertId });
    } else {
      res.status(404).send('Estudiante no agregado');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const actualizarEstudiante = async (req, res) => {
  const { id } = req.params;
  try {
    const { dni, nombre, apellido, email } = req.body;
    const estudiante = await actualizarEstudiantePorId(
      id,
      dni,
      nombre,
      apellido,
      email
    );
    if (estudiante) {
      res.status(200).json({
        message: 'Estudiante actualizado correctamente'
      });
    } else {
      res.status(404).send('Estudiante no actualizado');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const eliminarEstudiante = async (req, res) => {
  const { id } = req.params;

  try {
    const estudiante = await eliminarEstudiantePorId(id);
    if (estudiante) {
      res.status(200).json({ message: 'Estudiante eliminado correctamente' });
    } else {
      res.status(404).send('Estudiante no eliminado');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

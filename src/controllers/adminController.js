import {
  loginAdministrador,
  RegistrarAdministrador
} from '../models/adminModel.js';

export const RegistrarAdministradorController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const administrador = await RegistrarAdministrador(email, password);
    if (administrador) {
      res
        .status(200)
        .json({ message: `Registro exitoso. ID: ${administrador.insertId}` });
    } else {
      res.status(404).send('Administrador no agregado');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const loginAdministradorcontroller = async (req, res) => {
  try {
    const { email, password } = req.body;
    const payload = await loginAdministrador(email, password);
    if (payload) {
      res.status(200).json(payload);
    } else {
      res.status(404).send('Token no encontrado');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

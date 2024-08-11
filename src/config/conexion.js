import mysql2 from 'mysql2/promise';
import { envs } from '../config/env.js';

const db = await mysql2.createConnection({
  host: envs.HOST,
  user: envs.USER,
  password: envs.PASSWORD,
  database: envs.DATABASE,
  port: envs.PORT_DB
});

export default db;

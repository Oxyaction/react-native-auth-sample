import Knex from 'knex';
import '../types';

export const db = Knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    database: 'auth_demo',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
  debug: true,
});

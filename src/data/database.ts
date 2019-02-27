import knex = require('knex');
import knexFile = require('../../knexfile');

export const database = knex(knexFile[process.env.NODE_ENV]);
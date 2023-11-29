'use strict';

const { neon } = require('@neondatabase/serverless');
require('dotenv').config();

module.exports.getAllStudents = async () => {
 var sql = neon(process.env.DATABASE_URL);
 var rows = await sql('SELECT * from students');
 return {
   statusCode: 200,
   body: JSON.stringify(rows),
 };
};


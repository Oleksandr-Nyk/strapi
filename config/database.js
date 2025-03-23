const path = require('path');
require('dotenv').config({
  path: path.resolve(process.cwd(), '../', '.env')
});


module.exports = ({ env }) => ({
  connection: {
    client: process.env.DATABASE_CLIENT,
    connection: {
      host: env('DATABASE_HOST', process.env.DATABASE_HOST),
      port: env('DATABASE_PORT', process.env.DATABASE_PORT),
      database: env('DATABASE_NAME', process.env.DATABASE_NAME),
      user: env('DATABASE_USERNAME', process.env.DATABASE_USERNAME),
      password: env('DATABASE_PASSWORD', process.env.DATABASE_PASSWORD),
      ssl: env.bool("DATABASE_SSL", process.env.DATABASE_SSL),
    },
    pool: { min: 1, max: 20 },
    useNullAsDefault: true,
  }
});
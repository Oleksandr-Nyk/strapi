const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: process.env.DATABASE_CLIENT,
    connection: {
      host: env('DATABASE_HOST', process.env.SUPABASE_HOST),
      port: env.int('DATABASE_PORT', process.env.DATABASE_PORT),
      database: env('DATABASE_NAME', process.env.DATABASE_NAME),
      user: env('DATABASE_USERNAME', process.env.DATABASE_USERNAME),
      password: env('DATABASE_PASSWORD', process.env.DATABASE_PASSWORD),
      ssl: {
        rejectUnauthorized: process.env.DATABASE_SSL,
      },
    },
    useNullAsDefault: true,
  }
});
const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env('DATABASE_HOST', 'db.jsgkncdrhlydwikdqenp.supabase.co'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'postgres'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'was328-Age46'),
      ssl: env.bool('DATABASE_SSL', false),
    },
    useNullAsDefault: true,
  }
});

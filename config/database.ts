module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-d0k7fiil9vc738mb8v0-a'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'dbstrapi_6uqy'),
      user: env('DATABASE_USERNAME', 'dbstrapi_6uqy_user'),
      password: env('DATABASE_PASSWORD', 'kW4fvcLxKwFKV85z6OtucpWodJBxjyr3'),
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
});
// aeasdasdas

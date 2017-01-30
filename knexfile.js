const connection = {
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_SERVICE,
  user: process.env.POSTGRES_USER,
  port: process.env.POSTGRES_PORT,
  password: process.env.POSTGRES_PASSWORD
};

module.exports = {
  development: {
    client: 'postgresql',
    connection,
    pool: { min: 2, max: 10 },
    migrations: { tableName: 'migrations' }
  },
  production: {
    client: 'postgresql',
    connection,
    pool: { min: 2, max: 10 },
    migrations: { tableName: 'migrations' }
  }
};


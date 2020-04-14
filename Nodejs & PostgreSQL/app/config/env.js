const env = {
  database: 'your_database_name',
  username: 'postgres',
  password: 'your_password',
  host: 'localhost',
  dialect: 'postgres',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};

module.exports = env;

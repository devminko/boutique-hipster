const Sequelize = require('sequelize');

let useSSL = false;
if (process.env.NODE_ENV === 'production') {
  useSSL = true;
};

const database = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: false,
  dialectOptions: {
    ssl: useSSL
  }
});

database.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => console.error(`Unable to connect to the database: ${err}`));

module.exports = database;
const express = require('express');
const app = express();
const database = require('./database/database');

app.get('/', (req, res) => {
  res.send('Welcome to the Boutique Hipster API!');
});

// Sync Defined Models to DB Tables
database.sync({ force: false })
  .then(console.log('Defined models synced to DB'))
  .catch(err => console.error(`Unable to sync database: ${err}`));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on Port: ${PORT}. Currently running in ${process.env.NODE_ENV} mode.`));
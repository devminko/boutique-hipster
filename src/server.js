const express = require('express');
const app = express();
const cors = require('cors');
const database = require('./database/database');

// Middleware
app.use(express.json({ extended: false }));
app.use(cors());

// Routes
app.use('/api/users', require('./routes/users'));

// Sync Defined Models to DB Tables
database.sync({ force: true })
  .then(() => console.log('Defined models synced to DB'))
  .catch(err => console.error(`Unable to sync database: ${err}`));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on Port: ${PORT}. Currently running in ${process.env.NODE_ENV} mode.`));
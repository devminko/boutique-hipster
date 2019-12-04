const express = require('express');
const app = express();
const cors = require('cors');
const database = require('./database/database');

// Middleware
app.use(express.json({ extended: false }));
app.use(cors());

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/products', require('./routes/products'));

// Sync Defined Models to DB Tables
database.sync({ force: false })   // set to true to drop table on server start
  .then(() => console.log('Defined models synced to DB'))
  .catch(err => console.error(`Unable to sync database: ${err}`));

// serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'))

  // serve the built index.js
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on Port: ${PORT}. Currently running in ${process.env.NODE_ENV} mode.`));
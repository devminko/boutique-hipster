const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the Boutique Hipster API!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on Port: ${PORT}`));
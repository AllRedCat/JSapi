const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('../src/routes/user');
const loginRoutes = require('../src/routes/login');
const listRoutes = require('../src/routes/list');
const cors = require('cors');

module.exports = () => {
  const app = express();

  app.set('port', 3000);

  app.use(bodyParser.json());
  app.use(cors());

  app.use('/user', userRoutes);
  app.use('/login', loginRoutes);
  app.use('/list', listRoutes);

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
  });

  return app;
}

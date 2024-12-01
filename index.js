const app = require ('./config/express')();
const listEndpoints = require('express-list-endpoints');
require('dotenv').config();

app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')}`);
  const endpoints = listEndpoints(app);
  console.log(endpoints);
});
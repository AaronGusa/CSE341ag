const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Hello Amber and Ames and Alice and Art and Adam!')
  });

//export - in this class this is the method to export routes in any node API

module.exports = routes;
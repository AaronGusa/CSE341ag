const routes = require('express').Router();

routes.get('/', (req, res, next) => {
    res.send('Hello Amber and Ames and Alice and Art and Adam!');
});

routes.get('/test', (req, res, next) => {
  res.send("You don't need to stay here, it's only a test.");
});

routes.use('/contacts', require('./contacts'))



//export - in this class this is the method to export routes in any node API

module.exports = routes;
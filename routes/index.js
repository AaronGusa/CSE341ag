const routes = require('express').Router();
const testLink = '/CSE341ag/testpage/new.html'

routes.get('/', (req, res, next) => {
    res.send('Hello Amber and Ames and Alice and Art and Adam!');
});

routes.get('/test', (req, res, next) => {
  res.send('Hello there');
});




//export - in this class this is the method to export routes in any node API

module.exports = routes;
const routes = require('express').Router();

routes.use('/', require('./swagger'))

// routes.get('/', (req, res, next) => {
//     res.send('Hello Amber and Ames and Alice and Art and Adam!');
// });

routes.get('/test', (req, res, next) => {
  res.send("You don't need to stay here, it's only a test.");
});

routes.use('/contacts', require('./contacts'))

routes.use('/', 
  // require('../../front/new.html')
  (docData = (req, res) => {
    
  let docData = {
    APIs: 'http://localhost:8080/api',
    Contact_JSON: 'http://localhost:8080/contacts'
  };
  res.send(docData);
})
  
)


//export - in this class this is the method to export routes in any node API

module.exports = routes;
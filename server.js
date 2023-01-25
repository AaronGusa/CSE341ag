//ESSENTIAL FOR EVERY PROJECT

//APP AND PORT PARAMETERS -- 
//EXPRESS MAKES IT EASY TO HANDLE LOTS OF ROUTES IN OUR APPLICATION
const express = require('express');
const app = express();
const bodyParse = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./back/db/dbConnect');
const routesHub = require('./back/routes/index');
const port = process.env.PORT || 8080;
const swaggerUi = require('swagger-ui-express');
const swagDoc = require('./swagger.json')

//WHEN ACCESSED GET WILL BE DISPLAYED -- ROUTES
//MOVED TO ROUTES FOLDER
    // app.get('/', (req, res) => {
    //   res.send('Hello Friend!')
    // });
//REPLACED ABOVE ROUTES

app
  .use('/routes', swaggerUi.serve, swaggerUi.setup(swagDoc))
  // .use(bodyParse.urlencoded({
  //   extended: true
  // }))
  .use(bodyParse.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    );
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
  })
  .use('/', routesHub);

//LISTEN WILL WHAT IS OBSERVING FOR PORT INTERACTION

mongodb.initDb( (err, mongodb) => {
  if (err) {
    console.log(err);
  } else {  
    app.listen(port, () => {
      console.log(`Running on port ${port}`)
  })
}});

//NOTES
// SERVER.JS IS VERY LEAN
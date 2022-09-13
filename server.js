//ESSENTIAL FOR EVERY PROJECT

//APP AND PORT PARAMETERS -- 
//EXPRESS MAKES IT EASY TO HANDLE LOTS OF ROUTES IN OUR APPLICATION
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

//WHEN ACCESSED GET WILL BE DISPLAYED -- ROUTES
//MOVED TO ROUTES FOLDER
    // app.get('/', (req, res) => {
    //   res.send('Hello Friend!')
    // });
//REPLACED ABOVE ROUTES
app.use('/', require('./routes'))

//LISTEN WILL WHAT IS OBSERVING FOR PORT INTERACTION
app.listen(port, () => {
  console.log(`Running on port ${port}`)
});

//NOTES
// SERVER.JS IS VERY LEAN
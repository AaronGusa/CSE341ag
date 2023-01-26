const swaggerAutogen = require('swagger-autogen');

const doc = {
    info: {
        title: "Aaron Gusa's Personal Assignment",
        description: "W04 CSE341 Personal Assignment",
    },
    host: 'ag341.onrender.com',
    schemes: ['https'],
};
//FOR LOCAL DEV
// const doc = {
//     info: {
//         title: "Aaron Gusa's Personal Assignment",
//         description: "W04 CSE341 Personal Assignment",
//     },
//     host: 'localhost:8080',
//     schemes: ['http'],
// };

const outputFile = './swagger.json';
const endpointsFiles = ['./back/routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);


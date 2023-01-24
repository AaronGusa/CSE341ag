const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swagDoc = require('../../swagger.json');

router.use('/api', swaggerUi.serve);
router.get('/api', swaggerUi.setup(swagDoc));

module.exports = router;
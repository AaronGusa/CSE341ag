// Req's and setups
const router = require('express').Router();

const contController = require('../controllers/contacts');

// formulas

router.get('/', contController.getDb);

router.get('/:id', contController.getOne);

// exports

module.exports = router;
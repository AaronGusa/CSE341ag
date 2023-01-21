// Req's and setups
const router = require('express').Router();

const contController = require('../controllers/contacts');

// formulas

router.get('/', contController.getDb);

router.get('/:id', contController.getOne);

router.post('/', contController.postContact);

router.put('/:id', contController.putContact);

router.delete('/:id', contController.deleteContact);

// exports

module.exports = router;
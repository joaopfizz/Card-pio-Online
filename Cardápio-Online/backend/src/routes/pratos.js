const express = require('express');
const router = express.Router();
const controller = require('../controllers/pratosController');

router.post('/', controller.create);
router.get('/', controller.list);
router.get('/:id', controller.get);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;

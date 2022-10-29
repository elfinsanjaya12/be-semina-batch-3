const express = require('express');
const router = express();
const { create, index, find, destroy, update } = require('./controller');
const { authenticateUser } = require('../../../middlewares/auth');

router.get('/', authenticateUser, index);
router.get('/:id', authenticateUser, find);
router.put('/:id', authenticateUser, update);
router.delete('/:id', authenticateUser, destroy);
router.post('/', authenticateUser, create);

module.exports = router;

const express = require('express');
const router = express();

const { create, index, find, update, destroy } = require('./controller');

const { authenticateUser } = require('../../../middlewares/auth');

router.get('/', authenticateUser, index);
router.get('/:id', authenticateUser, find);
router.put('/:id', authenticateUser, update);
router.post('/', authenticateUser, create);
router.delete('/:id', authenticateUser, destroy);

module.exports = router;

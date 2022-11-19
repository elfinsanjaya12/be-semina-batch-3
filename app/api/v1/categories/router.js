const express = require('express');
const router = express();

const { create, index, find, update, destroy } = require('./controller');

const {
  authenticateUser,
  authorizeRoles,
} = require('../../../middlewares/auth');

router.get('/', authenticateUser, authorizeRoles('organizer'), index);
router.get('/:id', authenticateUser, authorizeRoles('organizer'), find);
router.put('/:id', authenticateUser, authorizeRoles('organizer'), update);
router.post('/', authenticateUser, authorizeRoles('organizer'), create);
router.delete('/:id', authenticateUser, authorizeRoles('organizer'), destroy);

module.exports = router;

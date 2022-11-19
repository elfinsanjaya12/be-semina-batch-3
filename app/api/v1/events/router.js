const express = require('express');
const router = express();
const { create, index, find, destroy, update } = require('./controller');
const {
  authenticateUser,
  authorizeRoles,
} = require('../../../middlewares/auth');

router.get('/', authenticateUser, authorizeRoles('organizer', 'admin'), index);
router.get(
  '/:id',
  authenticateUser,
  authorizeRoles('organizer', 'admin'),
  find
);
router.put(
  '/:id',
  authenticateUser,
  authorizeRoles('organizer', 'admin'),
  update
);
router.delete(
  '/:id',
  authenticateUser,
  authorizeRoles('organizer', 'admin'),
  destroy
);
router.post(
  '/',
  authenticateUser,
  authorizeRoles('organizer', 'admin'),
  create
);

module.exports = router;

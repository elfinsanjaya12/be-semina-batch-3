const express = require('express');
const router = express();
const {
  getAllLandingPage,
  getDetailLandingPage,
  signup,
  signin,
  activeParticipant,
} = require('./controller');

router.get('/events', getAllLandingPage);
router.get('/events/:id', getDetailLandingPage);
router.post('/auth/signup', signup);
router.post('/auth/signin', signin);
router.put('/active', activeParticipant);

module.exports = router;

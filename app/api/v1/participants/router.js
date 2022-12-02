const express = require('express');
const router = express();
const { getAllLandingPage } = require('./controller');

router.get('/events', getAllLandingPage);

module.exports = router;

const express = require('express');
const router = express();
const { createCMSOrganizer } = require('./controller');

router.post('/', createCMSOrganizer);
module.exports = router;

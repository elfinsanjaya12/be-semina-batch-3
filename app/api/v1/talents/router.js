const express = require('express');
const router = express();

router.get('/', (req, res) => {
  res.send({ data: 'talens' });
});

module.exports = router;

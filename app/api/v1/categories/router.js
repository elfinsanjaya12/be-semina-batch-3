const express = require('express');
const router = express();

const { create, index, find, update, destroy } = require('./controller');

router.get('/', index);
router.get('/:id', find);
router.put('/:id', update);
router.post('/', create);
router.delete('/:id', destroy);

module.exports = router;

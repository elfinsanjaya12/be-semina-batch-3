const express = require('express');
const router = express();
const { create, index, find, destroy, update } = require('./controller');

router.get('/', index);
router.get('/:id', find);
router.put('/:id', update);
router.delete('/:id', destroy);
router.post('/', create);

module.exports = router;

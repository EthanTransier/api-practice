const express = require('express');
const router = express.Router();

const {readMenu, readItem, createMenu, updateMenu, deleteMenu} = require('../controllers/menu')

router.get('/', readMenu)
router.get('/:id', readItem)
router.post('/', createMenu)
router.put('/:id', updateMenu)
router.delete('/:id', deleteMenu)



module.exports = router;
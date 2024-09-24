const express = require("express");
const router = express.Router();

const { getMenus, getMenu } = require('../controllers/menu.controller');

router.get('/', getMenus);
router.get('/:id', getMenu);

module.exports = router;
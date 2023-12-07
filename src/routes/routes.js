const express = require('express');
const router = express.Router();
const animeController = require('../http/controllers/animeController');
const testController = require('../http/controllers/testController');

router.get('/demon-slayer', animeController.getAllAnime);
router.get('/demon-slayer/:name', animeController.getAnimeName);
router.get('/test', testController.testGet);

module.exports = router;

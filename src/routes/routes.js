const express = require('express');
const router = express.Router();
const animeController = require('../http/controllers/animeController');

router.get('/', [{
    "teste": "teste",
    "teste": "teste"
}]);

router.get('/demon-slayer', animeController.getAllAnime);
router.get('/demon-slayer/:name', animeController.getAnimeName);

module.exports = router;

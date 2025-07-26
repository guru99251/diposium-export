// server/src/routes/artworks.js
const express = require('express');
const router = express.Router();
const { getArtworks } = require('../controllers/artworkController');

// GET /api/artworks
router.get('/', getArtworks);

module.exports = router;

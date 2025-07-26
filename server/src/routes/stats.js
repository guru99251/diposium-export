// server/src/routes/stats.js
const express = require('express');
const router = express.Router();
const { getStats } = require('../controllers/statsController');

// GET /api/stats
router.get('/', getStats);

module.exports = router;

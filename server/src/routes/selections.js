// server/src/routes/selections.js
const express = require('express');
const router = express.Router();
const { createSelection, getSelectionsByUser } = require('../controllers/selectionController');

// POST /api/selections
router.post('/', createSelection);
// GET  /api/selections/:userId
router.get('/:userId', getSelectionsByUser);

module.exports = router;

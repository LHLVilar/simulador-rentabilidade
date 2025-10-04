// routes/simulatorRoutes.js

const express = require('express');
const router = express.Router();
const { simulate } = require('../utils/simulator');

// Rota de simulação
router.post('/', (req, res) => {
  try {
    const result = simulate(req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;

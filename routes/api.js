const express = require('express');
const router = express.Router();
const { simulate } = require('../utils/simulator');
const { saveLead } = require('../utils/googleSheets'); // função para integrar Sheets

router.post('/simulate', (req, res) => {
  try {
    const result = simulate(req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/lead', async (req, res) => {
  try {
    await saveLead(req.body); // envia para Google Sheets
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

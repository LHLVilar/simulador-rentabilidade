const express = require('express');
const router = express.Router();
const { simulate } = require('../utils/simulator');

// Rota de simulação
router.post('/simulate', (req, res) => {
  try {
    const result = simulate(req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Rota de captura de lead (ainda sem integração com Google Sheets)
router.post('/lead', async (req, res) => {
  try {
    // Aqui só faz log por enquanto
    console.log("Lead capturado:", req.body);
    res.json({ success: true, message: "Lead recebido (Google Sheets ainda não integrado)" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

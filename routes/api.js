// routes/api.js

const express = require('express');
const router = express.Router();

// Rota de captura de lead (ainda sem integração com Google Sheets)
router.post('/lead', async (req, res) => {
  try {
    const {
      nome,
      email,
      whatsapp,
      valorInvestimento,
      bairro,
      tipoOperacao,
      prazoAporte,
      rentabilidadeAnualMinima
    } = req.body;

    // Log do lead no servidor por enquanto
    console.log("Lead capturado:", {
      nome,
      email,
      whatsapp,
      valorInvestimento,
      bairro,
      tipoOperacao,
      prazoAporte,
      rentabilidadeAnualMinima
    });

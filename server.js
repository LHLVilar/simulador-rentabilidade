// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const simulatorRoutes = require('./routes/simulatorRoutes');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas
app.use('/api/simulate', simulatorRoutes); // rota do simulador
app.use('/api', apiRoutes);                // rota de leads

// Rota teste
app.get('/', (req, res) =>

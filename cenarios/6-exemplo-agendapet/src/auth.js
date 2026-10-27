// Esqueleto. Sem lógica real.
const express = require('express');
const router = express.Router();

// POST /v1/login/solicitar
router.post('/login/solicitar', async (req, res) => {
  // gera o token, grava no banco e chama o provedor de SMS
  throw new Error('not implemented');
});

// GET /v1/login/validar
router.get('/login/validar', async (req, res) => {
  // troca o token por uma sessão
  throw new Error('not implemented');
});

module.exports = router;

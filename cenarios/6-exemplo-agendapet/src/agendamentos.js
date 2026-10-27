// Esqueleto. Sem lógica real.
const express = require('express');
const router = express.Router();

router.post('/agendamentos', async (req, res) => { throw new Error('not implemented'); });
router.get('/agendamentos/:id', async (req, res) => { throw new Error('not implemented'); });
router.delete('/agendamentos/:id', async (req, res) => { throw new Error('not implemented'); });

module.exports = router;

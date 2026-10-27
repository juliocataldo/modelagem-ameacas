// Esqueleto. Sem lógica real.
async function criarTransferencia(req, res) {
  // lê o corpo, aplica as regras e envia ao SPI
  throw new Error('not implemented');
}

async function receberCallbackSpi(req, res) {
  // atualiza a transação com o resultado informado pelo SPI
  throw new Error('not implemented');
}

module.exports = { criarTransferencia, receberCallbackSpi };

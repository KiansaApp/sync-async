const fs = require('fs');

// Leitura assíncrona de arquivo
fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Erro ao ler o arquivo:', err);
      return;
    }
    console.log('Data lida:', data);
  });
  
  console.log('Esta mensagem pode ser exibida antes da leitura do arquivo.');
  console.log('-----------------------------------------')
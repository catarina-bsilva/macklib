const copyToClipboard = (text) => {
  console.log('copyToClipboard chamada com texto:', text); // Depuração
  navigator.clipboard.writeText(text).then(() => {
    console.log('Texto copiado para o clipboard:', text);
  }).catch(err => {
    console.error('Erro ao copiar o texto:', err);
  });
};

export default copyToClipboard;
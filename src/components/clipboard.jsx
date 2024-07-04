const copyToClipboard = (text) => {
    console.log('copyToClipboard chamada com texto:', text); // Depuração
    navigator.clipboard.writeText(text).then(() => {
      console.log('Texto copiado para o clipboard:', text);
    }).catch(err => {
      console.error('Erro ao copiar o texto:', err);
    });
  };
  
  const handleClick = (event) => {
    console.log('handleClick chamado'); // Depuração
    let target = event.target;
    let text = target.innerText || target.textContent;
  
    const tagName = target.tagName.toLowerCase();
    console.log('Tag do elemento clicado:', tagName); // Depuração
  
    // Se o alvo é um <li> ou <span>, tente pegar o texto de um possível elemento filho
    if ((tagName === 'li' || tagName === 'span') && target.children.length > 0) {
      target = target.children[0];
      text = target.innerText || target.textContent;
    }
  
    console.log('Texto extraído:', text); // Depuração
    const validTags = ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a', 'div', 'li', 'ul'];
  
    if (text && validTags.includes(tagName)) {
      console.log('Elemento válido clicado:', tagName, 'Texto:', text); // Depuração
      copyToClipboard(text);
    } else {
      console.log('Elemento não é válido ou não contém texto:', tagName); // Depuração
    }
  };
  
  const addClipboardEventListener = () => {
    document.addEventListener('click', handleClick);
    console.log('Event listener adicionado'); // Depuração
  };
  
  const removeClipboardEventListener = () => {
    document.removeEventListener('click', handleClick);
    console.log('Event listener removido'); // Depuração
  };
  
  export { addClipboardEventListener, removeClipboardEventListener };
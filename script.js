fetch('produtos.json')
  .then(res => res.json())
  .then(produtos => {
    const container = document.getElementById('produtos');
    produtos.forEach(prod => {
      const div = document.createElement('div');
      div.className = 'produto';
      div.innerHTML = `
        <img src="${prod.imagem}" alt="${prod.nome}">
        <h3>${prod.nome}</h3>
        <p>R$ ${prod.preco}</p>
        <button>Comprar</button>
      `;
      container.appendChild(div);
    });
  });
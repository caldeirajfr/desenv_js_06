// Adicionando um título ao site
document.body.innerHTML += '<h1 id="titulo">Loja de Discos</h1>';

// Adicionando um elemento de produto
// Criando o container principal do produto
const produtoContainer = document.createElement('div');
produtoContainer.id = 'produto';

// Adicionando o nome do produto
const nomeProduto = document.createElement('h2');
nomeProduto.textContent = 'CD Elvis Presley (1956)';
produtoContainer.appendChild(nomeProduto);

// Adicionando a descrição do produto
const descricaoProduto = document.createElement('p');
descricaoProduto.textContent = 'Elvis Presley é o primeiro álbum de estúdio de Elvis Presley, lançado pela RCA.';
produtoContainer.appendChild(descricaoProduto);

// Adicionando o preço do produto
const precoProduto = document.createElement('p');
precoProduto.textContent = 'Preço: R$ 99,90';
produtoContainer.appendChild(precoProduto);

// Adicionando uma imagem
const imagemProduto = document.createElement('img');
imagemProduto.src = 'https://cdn-images.dzcdn.net/images/cover/0e152eb3bd47149d0b9cc3b78bee33c2/500x500-000000-80-0-0.jpg'; // URL de exemplo
imagemProduto.alt = 'CD Elvis 1956';
produtoContainer.appendChild(imagemProduto);

// Inserindo o container do produto no body
document.body.appendChild(produtoContainer);


let total = [];

function adicionar() {
    let produtoSelecionado = document.querySelector('.produto-input').value;
    let partes = produtoSelecionado.split(' - ');
    let nomeProduto = partes[0];
    let precoString = partes[1].replace('R$', ''); 
    let precoProduto = parseFloat(precoString);
    let quantidade = document.querySelector('.quantidade-input').value;
    let soma = 0;

    if (quantidade > 0) {
        soma = precoProduto * quantidade;
        let listaProdutos = document.getElementById('lista-produtos');
        
        let novoProduto = document.createElement('section');
        novoProduto.classList.add('carrinho__produtos__produto');

        let quantidadeSpan = document.createElement('span');
        quantidadeSpan.classList.add('texto-azul');
        quantidadeSpan.textContent = `${quantidade}x `;

        let nomeProdutoSpan = document.createElement('span');
        nomeProdutoSpan.textContent = `${nomeProduto}`; 

        let precoSpan = document.createElement('span');
        precoSpan.classList.add('texto-azul');
        precoSpan.textContent = ` R$${soma.toFixed(2)}`;

        novoProduto.appendChild(quantidadeSpan);
        novoProduto.appendChild(nomeProdutoSpan);
        novoProduto.appendChild(precoSpan);

        listaProdutos.appendChild(novoProduto);

        document.getElementById('quantidade').value = 0;

        totalCarrinho(soma)
    } else {
        alert('Indique a Quantidade!');
    }
}

function totalCarrinho(soma) {
    total.push(soma);
    let totalCarrinho = 0;
    for (let i = 0; i < total.length; i++) {
        totalCarrinho += total[i];
    }
    let divTotal = document.getElementById('valor-total')
    divTotal.textContent = `R${totalCarrinho.toFixed(2)}`;
}

function limpar() {
    const listaProdutos = document.getElementById('lista-produtos');
    while (listaProdutos.lastChild) {
        listaProdutos.removeChild(listaProdutos.lastChild);
    }
    total = [];
    document.getElementById('valor-total').textContent = 'R$0.00';
}
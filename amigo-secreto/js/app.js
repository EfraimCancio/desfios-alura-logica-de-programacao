let listaNome = [];
let sorteio = [];

function adicionar() {
    let nome = document.getElementById('nome-amigo').value;
    let listaElemento = document.getElementById('lista-amigos');
    listaNome.push(nome);
    let listaAtual = listaElemento.textContent; 
    let novaLista = listaAtual ? listaAtual + ', ' + nome : nome;
    listaElemento.textContent = novaLista;
    document.getElementById('nome-amigo').value = '';
}

function sortear() {
    if (listaNome.length === 0) {
        alert('Não há nomes para sortear!');
    } else {
        for (let i = 0; i < listaNome.length; i++) {
            let indiceAleatorio = Math.floor(Math.random() * listaNome.length);
            let nomeSorteado = listaNome[indiceAleatorio];
            sorteio.push(listaNome.splice(indiceAleatorio, 1)[0]);
            i--;
            console.log('Nome sorteado:', nomeSorteado);
            console.log('sorteio:', sorteio);
        }

    }
}

function reiniciar() {
    listaNome = []; 
    sorteio = [];
}
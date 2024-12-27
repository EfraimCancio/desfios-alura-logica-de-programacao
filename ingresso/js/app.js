let qtdPistaDisponivel = 100;
let qtdSuperiorDisponivel = 200;
let qtdInferiorDisponivel = 400;


function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let qtdIngresso = document.getElementById('qtd').value;
    let pista = document.getElementById('qtd-pista');
    let superior = document.getElementById('qtd-superior');
    let inferior = document.getElementById('qtd-inferior');
    
    if (qtdIngresso < 11) {
        switch (tipoIngresso) {
            case 'pista':
                if (qtdIngresso <= qtdPistaDisponivel && qtdIngresso < 11) {
                    qtdPistaDisponivel -= qtdIngresso;
                    console.log('Ingressos de pista comprados com sucesso!', qtdPistaDisponivel);
                    document.getElementById('qtd').value = 0;
                } else {
                    console.log('Quantidade de ingressos de pista solicitada excede a disponibilidade.');
                }
            break;
            case 'superior':
                if (qtdIngresso <= qtdSuperiorDisponivel && qtdIngresso < 11){
                    qtdSuperiorDisponivel -= qtdIngresso;
                    console.log('Ingressos de cadeira Superior comprados com sucesso!', qtdSuperiorDisponivel);
                    document.getElementById('qtd').value = 0;
                }
            break;
            case 'inferior':
                if (qtdIngresso <= qtdInferiorDisponivel && qtdIngresso < 11){
                    qtdInferiorDisponivel -= qtdIngresso;
                    console.log('Ingressos de cadeira Inferior comprados com sucesso!', qtdInferiorDisponivel);
                    document.getElementById('qtd').value = 0;
                }
            break;
            default:
                console.log('Tipo de ingresso inválido.');
        }
    } else {
        console.log('Quantidade de ingressos solicitada excede o limite de 10.');
        document.getElementById('qtd').value = 0;
    }

    pista.innerText = `${qtdPistaDisponivel}`;
    superior.innerText = `${qtdSuperiorDisponivel}`;
    inferior.innerText = `${qtdInferiorDisponivel}`;

}
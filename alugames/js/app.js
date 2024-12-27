
 let game; 
 let actionButton; 
 let statusGame;
 let gameImage;

function getGameComponents(id) {
    game = document.getElementById(`game-${id}`);
    actionButton = game.querySelector('.dashboard__item__button');
    gameImage = game.querySelector('.dashboard__item__img');
    statusGame = gameImage.classList.contains('dashboard__item__img--rented');
}

function changeComponents(statusGame) {
    if (statusGame) {
        statusGame = false;
        actionButton.textContent = "Alugar";
        gameImage.classList.remove('dashboard__item__img--rented'); 
        actionButton.classList.remove('dashboard__item__button--return'); 
    } else {
        statusGame = true;
        gameImage.classList.add('dashboard__item__img--rented');        
        actionButton.classList.add('dashboard__item__button--return'); 
        actionButton.textContent = "Devolver";
    }
}

function alterarStatus(id) {
    getGameComponents(id);
    changeComponents(statusGame) 
}


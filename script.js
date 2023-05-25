let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let Name = "Divyanshu";
let chips = Math.floor(Math.random() * 50) + 100;

let playerEl = document.getElementById("player-el");
playerEl.textContent = Name + ": $" + chips;
chips = parseInt(chips);

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10){
        return 10;
    }
    else if (randomNumber === 1){
        return 11;
    }
    else{
        return randomNumber;
    }
}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
    if(isAlive === true && hasBlackJack === true){
        hasBlackJack = false;
        renderGame();
    }
}

function renderGame(){

    cardsEl.textContent = "Cards: "
    for(let i = 0; i< cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20){
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21){
        message = "You've got a Blackjack!!"
        hasBlackJack = true;
        chips +=5;
    }
    else{
        message = "You're out of the game!"
        let alertEl = document.getElementById("alert-el");
        alertEl.textContent = "START AGAIN!!"
        isAlive = false;
        chips -=1;
    }
    
    messageEl.textContent = message;
    playerEl.textContent = Name + ": $" + chips;
    
}

function newCard(){
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}
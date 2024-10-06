let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("playerEl")
let isAlive = true
let hasBlackjack = false
let cards = []
let sum = 0



function getRandomCard() {
    let randomCard = Math.floor( Math.random() * 13) + 1
    if (randomCard > 10) {
        return 10
    } else if (randomCard === 1) {
        return 11
    } else {
        return randomCard
    }
}

function startGame() {
    let isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame() {

    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        messageEl.innerText = "Would you like to draw another card?"
    } else if (sum === 21) {
        hasBlackjack = true
        messageEl.innerText = "Woohoo! You have blackjack!"
    } else {
        isAlive = false
        messageEl.innerText = "Busted Alert! Busted Alert! Have Fun Staying Poor Jackass!!!"
    }
}

function newCard() {
    if (isAlive && hasBlackjack === false ) {
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)
        renderGame()
    }
}




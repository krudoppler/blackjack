let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")



let firstCard = 10
let secondCard = 10
let cards = [firstCard, secondCard]

let sum = firstCard + secondCard

function startGame() {
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1] + " " + cards[2]
    if (sum <= 20) {
        messageEl.innerText = "Would you like to draw another card?"
    } else if (sum === 21) {
        messageEl.innerText = "Woohoo! You have blackjack!"
    } else {
        messageEl.innerText = "Busted Alert! Busted Alert! Have Fun Staying Poor Jackass!!!"
    }
}

function newCard() {
    newCard = 2
    cards.push(newCard)
    sum += newCard
    renderGame()
}




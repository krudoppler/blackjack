let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")



firstCard = 10
secondCard = 10
sum = firstCard + secondCard



function startGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    if (sum <= 20) {
        messageEl.innerText = "Would you like to draw another card?"
    } else if (sum === 21) {
        messageEl.innerText = "Woohoo! You have blackjack!"
    } else {
        messageEl.innerText = "Busted Alert! Busted Alert! Have Fun Staying Poor Jackass!!!"
    }
}

function newCard() {
    console.log("Drawing a new card from the deck")
}




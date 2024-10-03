
firstCard = 10
secondCard = 10

sum = firstCard + secondCard

let message = ""

if (sum <= 20) {
    message = "Would you like to draw another card?"
} else if (sum === 21) {
    message = "Woohoo! You have blackjack!"
} else {
    message = "You busted!"
   
}

console.log(message)

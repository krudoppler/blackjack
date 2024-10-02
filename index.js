// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11
firstCard = 10
secondCard = 12

sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
if (sum <= 20) {
    console.log("Would you like to draw another card?")
} else if (sum === 21) {
    console.log("Woohoo! You have blackjack!")
    hasBlackjack = true
} else {
    console.log("You busted!")
    isAlive = false
}

console.log(isAlive)

// 2. Create a variable, sum, and set it to the sum of the two cards
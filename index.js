// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11
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

// 2. Create a variable, sum, and set it to the sum of the two cards
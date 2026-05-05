// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

let age = 22

let firstCard = 10
let secondCard = 7
let sum = firstCard + secondCard + 6

if (sum < 21) {
    console.log("Do you want to draw a new card?")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack!")
} else {
    console.log("You're out of the game!")
} 

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"



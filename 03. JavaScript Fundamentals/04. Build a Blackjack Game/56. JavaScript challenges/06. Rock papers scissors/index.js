let hands = ["rock", "paper", "scissor"]
let randomChoice = ""
// Create a function that returns a random item from the array

function returnRandomChoice() {
    randomChoice = Math.floor(Math.random() * hands.length)

    return hands[randomChoice]
}

console.log(returnRandomChoice())
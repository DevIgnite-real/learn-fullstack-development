let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function returnRandomChoice() {
    let randomChoice = Math.floor(Math.random() * hands.length)

    return hands[randomChoice]
}

console.log(returnRandomChoice())
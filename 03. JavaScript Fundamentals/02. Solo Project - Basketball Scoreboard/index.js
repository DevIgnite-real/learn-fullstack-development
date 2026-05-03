let teamOneTotal = 0
let teamTwoTotal = 0

let homePoints = document.getElementById("home-score")

let guestPoints = document.getElementById("guest-score")

function addOnePointHome() {
    teamOneTotal += 1
    homePoints.textContent = teamOneTotal
}

function addTwoPointsHome() {
    teamOneTotal += 2
    homePoints.textContent = teamOneTotal
}

function addThreePointsHome() {
    teamOneTotal += 3
    homePoints.textContent = teamOneTotal
}


function addOnePointGuest() {
    teamTwoTotal += 1
    guestPoints.textContent = teamTwoTotal
}

function addTwoPointsGuest() {
    teamTwoTotal += 2
    guestPoints.textContent = teamTwoTotal
}

function addThreePointsGuest() {
    teamTwoTotal += 3
    guestPoints.textContent = teamTwoTotal
}

function resetAllPoints() {
    teamOneTotal = 0
    teamTwoTotal = 0
    homePoints.textContent = teamOneTotal
    guestPoints.textContent = teamTwoTotal
}
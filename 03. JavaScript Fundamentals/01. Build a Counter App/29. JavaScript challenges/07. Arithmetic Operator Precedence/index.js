/*
Challenge:
1. The following expression should calculate total expenses 
   for a trip, but it has a problem. It is giving me 548 but 
   I think that is too cheap. Have a look, and see if you can 
   figure out what problem we have with operator precedence and 
   change the code so we log out the correct cost of the trip.
*/

const tripLengthDays = 2
const tripDistanceKM = 300
const fuelPricePerKM = 1.5
const hotelCostPerNight = 60
const hotelDiscountPerNight = 6
const foodCost = 50

const totalCost = (fuelPricePerKM * tripDistanceKM) + ((hotelCostPerNight - hotelDiscountPerNight) * tripLengthDays) + foodCost

console.log(totalCost)

// const totalCost = foodCost + tripDistanceKM * fuelPricePerKM + hotelCostPerNight - hotelDiscountPerNight * tripLengthDays


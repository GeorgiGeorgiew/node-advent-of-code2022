const fs = require('fs');

fs.readFile('./input', 'utf8' , (err, data) => {

    elvesCalories = []
    currentElf = 0
    currentElfCalories = 0
    var lines = data.split("\n")
    for(line of lines) {
        if(line.trim().length > 1) {
            currentElfCalories = currentElfCalories + parseInt(line)
        } else {
            elvesCalories[currentElf] = currentElfCalories
            currentElf++
            currentElfCalories = 0
        }
    }
    elvesCalories[currentElf] = currentElfCalories
    
    sumOfTopThreeElves = elvesCalories.sort((a, b) => b-a).slice(0, 3).reduce((a,b) => a+b, 0)
    console.log(sumOfTopThreeElves)
})
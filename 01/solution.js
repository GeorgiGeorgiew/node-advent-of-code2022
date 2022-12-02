const fs = require('fs');

fs.readFile('./input', 'utf8' , (err, data) => {

    maxElfCalories = 0
    currentElfCalories = 0
    var lines = data.split("\n")
    for(line of lines) {
        if(line.trim().length > 1) {
            currentElfCalories = currentElfCalories + parseInt(line)
        } else {
            maxElfCalories = Math.max(maxElfCalories, currentElfCalories)
            currentElfCalories = 0
        }
    }
    console.log(maxElfCalories)
})

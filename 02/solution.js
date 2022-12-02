const fs = require('fs');

fs.readFile('./input', 'utf8' , (err, data) => {

    var selectionScores = new Map()
    selectionScores.set('X', 1)
    selectionScores.set('Y', 2)
    selectionScores.set('Z', 3)

    var keyBeatsValueMap = new Map()
    keyBeatsValueMap.set('X', 'C') // rock beats scissors
    keyBeatsValueMap.set('Y', 'A') // paper beats rock
    keyBeatsValueMap.set('Z', 'B') // scissors beat paper
    
    var myChoiceMapToOppEqualChoice = new Map()
    myChoiceMapToOppEqualChoice.set('X', 'A') // my rock -> opponents rock
    myChoiceMapToOppEqualChoice.set('Y', 'B') // my paper -> opponents paper
    myChoiceMapToOppEqualChoice.set('Z', 'C') // my scissors -> opponents scissors
    
    var lines = data.split("\n").filter(l => l.trim().length > 0)
    score = 0
    for(line of lines) {
        var ownChoice = line.trim().split(" ")[1]
        var oppChoice = line.trim().split(" ")[0]
        score += selectionScores.get(ownChoice)

        if(myChoiceMapToOppEqualChoice.get(ownChoice) == oppChoice) { // DRAW
            score += 3       
        } else if(keyBeatsValueMap.get(ownChoice) == oppChoice) { // OWN WIN
            score += 6
        }
    }    
    console.log(score)

})
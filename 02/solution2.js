const fs = require('fs');

fs.readFile('./input', 'utf8' , (err, data) => {

    var succBeatsPredecessor = ['A', 'B', 'C'] // Successor beats predecessor (including ringwise successor), also: selection score is index + 1
      
    var lines = data.split("\n").filter(l => l.trim().length > 0)
    score = 0
    for(line of lines) {
        var expResult = line.trim().split(" ")[1]
        var oppChoice = line.trim().split(" ")[0]
  
        if(expResult == 'X') { // I need to lose
            myChoice = succBeatsPredecessor[(succBeatsPredecessor.indexOf(oppChoice) + 2) % 3]
        } else if (expResult == 'Y' ) { // I need to draw
            myChoice = oppChoice
            score += 3
        } else { // I need to win
            myChoice = succBeatsPredecessor[(succBeatsPredecessor.indexOf(oppChoice) + 1) % 3] 
            score += 6
        } 
        score += succBeatsPredecessor.indexOf(myChoice) + 1
    }    
    console.log(score)

})
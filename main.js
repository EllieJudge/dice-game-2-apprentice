
let roundScore = 0;
let score = 0;
let number;

function roll(){
    number = Math.ceil((Math.random() * 6))
    console.log(`rolled = ${number}`) //5

        if (number == 1) {
            return console.log("Loser") //no

        } else if (roundScore >= 20) { //no
            return console.log("Winner!")
        }
        else {
            scoreFunc()
        }
}


function scoreFunc() {
    score += number; //6
    roundScore += score;
    console.log(`${score}`) //6    
    console.log(`${roundScore}`) //6
    roll()
}




function run() {
    roll()
}
run()
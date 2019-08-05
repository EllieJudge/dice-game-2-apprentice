const rollButton = document.getElementById("rollButton");
const hold = document.getElementById("hold");
const newGame = document.getElementById("newGameText");
let roundScore1 = parseInt(document.getElementById("roundScore1").textContent);
let globalScore1 = parseInt(document.getElementById("globalScore1").textContent);
let roundScore2 = parseInt(document.getElementById("roundScore2").textContent);
let globalScore2 = parseInt(document.getElementById("globalScore2").textContent);

let currentPlayer = "playerOne";

console.log(roundScore1)
console.log(globalScore1)
console.log(roundScore2)
console.log(globalScore2)
let number;

//hold button
hold.addEventListener("click", () => {
    holdFunc()
});

//new game button
newGame.addEventListener("click", () => {
    location.reload()
});

//roll button and roll function
rollButton.addEventListener("click", () => {
    function roll(){
        //generated random number/dice roll
        number = Math.ceil((Math.random() * 6))
        document.getElementById("image").src = `imgs/dice${number}.png`
        console.log(`rolled = ${number}`) 
    
        if (number !== 1 && currentPlayer == "playerOne") {
            roundScore1 += number;
            document.getElementById("roundScore1").textContent = roundScore1;
        }
        else if (number !== 1 && currentPlayer == "playerTwo"){
            roundScore2 += number;
            document.getElementById("roundScore2").textContent = roundScore2;
        }
        else {
            alert("rolled a one")
            roundScore1 = 0;
            document.getElementById("roundScore1").textContent = roundScore1;
            roundScore2 = 0;
            document.getElementById("roundScore2").textContent = roundScore2;
            holdFunc();
        }
    }
    roll()
});

//hold function, switches player and which function is run
function holdFunc() {
   if (currentPlayer == "playerOne") {
       currentPlayer = "playerTwo";
       globalScore1 += roundScore1;
       calculateScore()
       document.getElementById("globalScore1").textContent = globalScore1;
       console.log("hold, switch to player 2")
       roundScore1 = 0;
       document.getElementById("roundScore1").textContent = roundScore1;
       document.getElementById("container1").style.background = "orange";
       document.getElementById("container2").style.background = "white";
   }
   else {
       currentPlayer = "playerOne"
        globalScore2 += roundScore2;
        calculateScore()
        document.getElementById("globalScore2").textContent = globalScore2;
       console.log("hold, switch to player1")
       roundScore2 = 0;
       document.getElementById("roundScore2").textContent = roundScore2;
       document.getElementById("container2").style.background = "orange";
       document.getElementById("container1").style.background = "white";
   }
}

function calculateScore() {
    if(globalScore1 >= 50) {
        alert("Player 1 wins")
    }
    else if (globalScore2 >= 50) {
        alert("Player 2 wins")
    }
}



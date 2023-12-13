let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score")

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    //    rock, paper, scissors
   const randomIdx =  Math.floor(Math.random()*3);
   return options[randomIdx];
}


const drawGame = () => {
    // console.log("draw game");
    msg.innerText = "Game was Draw, Play Again.";
    msg.style.backgroundColor = "#040b14 ";
;}

const showWinnner = (userWin) =>{
    if(userWin){
        // console.log("you win");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `you Win!`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you lost.`;
        msg.style.backgroundColor = "red";
        // console.log("you lose");
    }
}


const playGame = (userChoice) =>{
    // console.log("user choice",userChoice);
    // generate computer choice -> modular way of programming
    const compChoice = genCompChoice();
    // console.log("comp choice",compChoice);

    if(userChoice === compChoice){
        // Draw
        drawGame();
    }else{
        let userWin = true;
        if(userChoice ==='rock'){
            // scissors, paper
            userWin = compChoice === "paper"?false:true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors"?false:true;
        }else if(userChoice === "scissors"){
            userWin = compChoice === "rock"?false:true;
        }
        showWinnner(userWin);
    }
}

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
})
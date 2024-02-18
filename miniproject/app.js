let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompchoice = ()=>{
    let options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const Drawgame = () => {
    msg.innerText = "Game Was Drawn Pay Again!";
    msg.style.backgroundColor = "#081b31"
};

const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win!Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost! your ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{
    console.log("use choice =", userChoice);
    // generate computer choice
    const compChoice = genCompchoice();
    console.log("comp choice =", compChoice);

    if(userChoice === compChoice){
        // Draw game
        Drawgame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"? false: true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors"? false: true;
        }else {
            userWin = compChoice === "rock"? false: true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};


choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
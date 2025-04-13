
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara= document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () =>{
            const options = ["rock","paper","scissors"];
            const randId  = Math.floor(Math.random()*3);
            return options[randId];

};

    const drawGame = () =>{
        msg.innerText = "Game is draw";
        msg.style.backgroundColor = "#081b31";
    };
    
    const showWinner = (userWin) =>{
        if(userWin){
            userScore++;
            userScorePara.innerText = userScore;
            msg.innerText = "You Win!";
            msg.style.backgroundColor = "green";
        }else{
            compScore++;
            compScorePara.innerText = compScore;
            msg.innerText = "You Lose";
            msg.style.backgroundColor = "red";
            
        }
    };

    const playGame = (userChoice) =>{
            //Generate Computer choice
            const compChoice = genCompChoice();

            if(userChoice == compChoice){
                drawGame();
            }
            else{
                let userWin = true;
                if(userChoice === "rock"){
                    // scissor or paper
                    userWin = compChoice === "paper"? false : true;
                }
                else if(userChoice === "paper"){
                    // rock or scissors
                    userWin = compChoice === "scissors"? false : true;
                }
                else{
                    // rock or paper
                    userWin = compChoice === "rock"? false : true;
                }
                showWinner(userWin);
            }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("Id");
        playGame(userChoice);
    });
});

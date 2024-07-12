// Initialize scores for user and computer
let userScore = 0;
let compScore = 0;

// Define an array of possible choices (Rock, Paper, Scissors)
let choices: string[] = ["Rock", "Paper", "Scissors"];

// Get all elements with class "box" (user choice buttons)
let myChoices = document.querySelectorAll(".box")!;

// Get the message box element
let msg = document.querySelector("#msg-box") as HTMLDivElement;

// Get the user score and computer score elements
let uScore = document.querySelector(".User-score") as HTMLDivElement;
let CScore = document.querySelector(".Comp-score") as HTMLDivElement;

// Add event listeners to each user choice button
for (let box of myChoices) {
  box.addEventListener("click", () => {
    // Get the user's chosen option (Rock, Paper, or Scissors)
    let userChoice = box.getAttribute("id")!;
    // Start the game with the user's choice
    startGame(userChoice);
  });
}

// Function to start the game with the user's choice
const startGame = (userChoice: string) => {
  // Generate a random number between 0 and 2 to select the computer's choice
  let randomNum = Math.floor(Math.random() * 3);
  // Get the computer's chosen option (Rock, Paper, or Scissors)
  let compchoice = choices[randomNum];
  console.log("compchoice", compchoice);
  console.log("userchoice", userChoice);
  // Determine the game winner
  gameWinner(userChoice, compchoice);
};

// Function to determine the game winner
const gameWinner = (userChoice?: string, compchoice?: string) => {
  // Check for a tie
  if (
    (userChoice === "Rock" && compchoice === "Rock") ||
    (userChoice === "Paper" && compchoice === "Paper") ||
    (userChoice === "Scissors" && compchoice === "Scissors")
  ) {
    // Display a tie message
    msg.innerText = "Looks like we have a tie. Let's play again.";
  } 
  // Check if the user wins
  else if (
    (userChoice === "Paper" && compchoice === "Rock") ||
    (userChoice === "Rock" && compchoice === "Scissors") ||
    (userChoice === "Scissors" && compchoice === "Paper")
  ) {
    // Increment the user's score and display a win message
    userScore++;
    uScore.innerText = `${userScore} \n YOU`;
    msg.innerText = "Congratulations, you outsmarted the computer!";
  } 
  // Check if the computer wins
  else if (
    (userChoice === "Scissors" && compchoice === "Rock") ||
    (userChoice === "Rock" && compchoice === "Paper") ||
    (userChoice === "Paper" && compchoice === "Scissors")
  ) {
    // Increment the computer's score and display a loss message
    compScore++;
    CScore.innerText = `${compScore} \n Comp`;
    msg.innerText = "Oh no! The computer got the best of you.";
  }
};
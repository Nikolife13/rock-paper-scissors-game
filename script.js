// Simple variables
let p1score = 0;
let p2score = 0;
let tiescore = 0;
let p1choice = "";
let p2choice = "";

// Select choice function
function selectChoice(player, choice) {
  if (player === 1) {
    p1choice = choice;
    document.getElementById("p1choice").textContent = getEmoji(choice);
    document.getElementById("p1image").textContent = getEmoji(choice);
  } else {
    p2choice = choice;
    document.getElementById("p2choice").textContent = getEmoji(choice);
    document.getElementById("p2image").textContent = getEmoji(choice);
  }

  // Enable play button if both have chosen
  if (p1choice !== "" && p2choice !== "") {
    document.getElementById("playbtn").disabled = false;
  }
}

// Get emoji
function getEmoji(choice) {
  if (choice === "rock") return "✊";
  if (choice === "paper") return "✋";
  if (choice === "scissors") return "✌️";
  return "-";
}

// Play game function
function playGame() {
  // Check if both players have chosen
  if (p1choice === "" || p2choice === "") {
    alert("Both players need to choose first!");
    return;
  }

  // Remove any existing winner/loser classes and text
  document.getElementById("player1").className = "player";
  document.getElementById("player2").className = "player";
  document.getElementById("p1wintext").textContent = "";
  document.getElementById("p2wintext").textContent = "";

  // Determine winner using simple if/else
  let result = "";

  if (p1choice === p2choice) {
    result = "tie";
  } else if (p1choice === "rock" && p2choice === "scissors") {
    result = "p1";
  } else if (p1choice === "scissors" && p2choice === "paper") {
    result = "p1";
  } else if (p1choice === "paper" && p2choice === "rock") {
    result = "p1";
  } else {
    result = "p2";
  }

  // Update scores using i++ and highlight winner
  if (result === "p1") {
    p1score++;
    document.getElementById("p1score").textContent = p1score;
    showResult("Player 1 Wins! 🎉", "winner-text");

    // Highlight Player 1 as winner, Player 2 as loser
    document.getElementById("player1").classList.add("winner");
    document.getElementById("player2").classList.add("loser");

    // Show "WON!" text
    document.getElementById("p1wintext").textContent = "WON!";
  } else if (result === "p2") {
    p2score++;
    document.getElementById("p2score").textContent = p2score;
    showResult("Player 2 Wins! 🎉", "winner-text");

    // Highlight Player 2 as winner, Player 1 as loser
    document.getElementById("player2").classList.add("winner");
    document.getElementById("player1").classList.add("loser");

    // Show "WON!" text
    document.getElementById("p2wintext").textContent = "WON!";
  } else {
    tiescore++;
    document.getElementById("tiescore").textContent = tiescore;
    showResult("It's a Tie! 🤝", "tie-text");

    // No highlighting for tie
  }

  // Reset for next round after 2 seconds
  setTimeout(resetChoices, 2000);
}

// Show result
function showResult(message, className) {
  document.getElementById("result").textContent = message;
  document.getElementById("result").className = className;
  document.getElementById("playbtn").disabled = true;
}

// Reset choices for next round
function resetChoices() {
  p1choice = "";
  p2choice = "";
  document.getElementById("p1choice").textContent = "-";
  document.getElementById("p2choice").textContent = "-";
  document.getElementById("p1image").textContent = "👤";
  document.getElementById("p2image").textContent = "👤";
  document.getElementById("result").textContent = "";

  // Remove winner/loser highlighting and text
  document.getElementById("player1").className = "player";
  document.getElementById("player2").className = "player";
  document.getElementById("p1wintext").textContent = "";
  document.getElementById("p2wintext").textContent = "";

  document.getElementById("playbtn").disabled = true;
}

// Reset entire game
function resetGame() {
  p1score = 0;
  p2score = 0;
  tiescore = 0;
  document.getElementById("p1score").textContent = "0";
  document.getElementById("p2score").textContent = "0";
  document.getElementById("tiescore").textContent = "0";
  resetChoices();
}

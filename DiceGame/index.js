// Randomize two numbers from 1 to 6
var randomNumber1 = Math.floor(Math.random() * 6)+ 1;
var randomNumber2 = Math.floor(Math.random() * 6)+ 1;

// Use the corresponding pictures of the dice representing the randomized numbers
document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice" + randomNumber2 + ".png");

// Determine & Display the Winner
if (randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent = "🚩Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 Wins!🚩";
} else {
  document.querySelector("h1").textContent = "It's a Draw!";
}

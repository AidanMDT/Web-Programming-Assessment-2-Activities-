//Act 10: Game or Interactive Art Advance
//by Aidan Matthew Data Tayag
//Creative Computing Level 4

//Rules:
//Player must click circles before time runs out
//The player has 3 lives

//Game states
let gameState = "title";

//Circle variables
let circleX;
let circleY;
let circleSize = 45;

//Variables for changing circle size
let growAmount = 1;
let maxSize = 60;
let minSize = 35;

//Score variable
let score = 0;

//Timer variable
let timer = 20;

//Lives variable
let lives = 3;

//Used to count seconds
let lastTime = 0;

//Win/Lose png
let victoryImage;
let loseImage;

function preload() {

  //Load custom images
  victoryImage = loadImage("victory.jpg");
  loseImage = loadImage("lose.jpg");
}

function setup() {
  createCanvas(800, 600);

  //Starting circle position
  moveCircle();
}

function draw() {
  background("#162129");

  //Title screen
  if (gameState === "title") {
    showTitleScreen();
  }

  //Gameplay screen
  else if (gameState === "play") {
    playGame();
  }

  //Win screen
  else if (gameState === "win") {
    showWinScreen();
  }

  //Lose screan
  else if (gameState === "lose") {
    showLoseScreen();
  }
}


//Title Screen
function showTitleScreen() {

  textAlign(CENTER);

  fill(255);
  textSize(58);
  text("Aim Research Facility", width / 2, 180);

  textSize(32);
  text("Click the circles before timer runs out", width / 2, 280);
  text("You only have 3 lives", width / 2, 330);
  text("Reach 20 points to win", width / 2, 380);

  fill("#66FFAC");
  textSize(38);
  text("Press SPACE to Start", width / 2, 500);
}


//Gameplay
function playGame() {

  //Background color
  background("#162129");

  //Make the circle grow and shrink
circleSize += growAmount;

//Shrink Circle once circle reaches max size
if (circleSize >= maxSize || circleSize <= minSize) {
  growAmount *= -1;
}

//Draw circle target
noStroke();
fill("#54F7F7");
ellipse(circleX, circleY, circleSize);

  //Display score
  fill(255);
  textSize(32);
  textAlign(LEFT);
  text("Score: " + score, 20, 40);

  //Display timer
  text("Time: " + timer, 20, 80);

  //Display lives
  text("Lives: " + lives, 20, 120);

  //Decrease timer every second
  if (millis() - lastTime >= 1000) {
    timer--;
    lastTime = millis();
  }

  //Lose if timer reaches 0
  if (timer <= 0) {
    gameState = "lose";
  }

  //Win if player gets enough points
  if (score >= 20) {
    gameState = "win";
  }
}

//Move Target 
function moveCircle() {

  //Random location
  circleX = random(100, width - 100);
  circleY = random(100, height - 100);
}


//Mouse input
function mousePressed() {

  //Only works during gameplay
  if (gameState === "play") {

    //Calculate distance from mouse to circle
    let distance = dist(mouseX, mouseY, circleX, circleY);

    //If player clicks the circle
    if (distance < circleSize / 2) {

      //Add score
      score++;

      //Move target
      moveCircle();
    }

    //If player misses the Target
    else {

      //Remove live
      lives--;

      //Lose game if no lives remaining 
      if (lives <= 0) {
        gameState = "lose";
      }
    }
  }
}

//Win Screen
function showWinScreen() {

  background("#66FFAC");

  //Show victory image
  image(victoryImage, 0, 0, width, height);

  //Win text
fill(0);
textAlign(CENTER);

textSize(45);
text("TOO EASY!!", width / 2, height / 2 - 20);

textSize(32);
text("NRG is waiting with a contract for you...", width / 2, height / 2 + 30);

//Restart text
textSize(38);
text("Press R to Restart", width / 2, height / 2 + 100);
}

//Lose Screen
function showLoseScreen() {

  background(0);

  //Show lose image
  image(loseImage, 0, 0, width, height);

  //Lose text
fill(255);
textAlign(CENTER);
textSize(45);
text("Maybe Next Season..", width / 2, 80);

textSize(32);
text("Try a bit harder next time", width / 2, 120);

// Restart text
textSize(38);
text("Press R to Restart", width / 2, 550);
}


//Define key pressed
function keyPressed() {

  //Start game
  if (gameState === "title" && key === " ") {

    gameState = "play";

    //Reset timer start
    lastTime = millis();
  }

  //Restart game
  if ((gameState === "win" || gameState === "lose") &&
      (key === "r" || key === "R")) {

    restartGame();
  }
}

//Restart Game
function restartGame() {

  //Reset variables
  score = 0;
  timer = 20;
  lives = 3;

  //Move target again
  moveCircle();

  //Reset timer
  lastTime = millis();

  //Return to gameplay
  gameState = "play";
}

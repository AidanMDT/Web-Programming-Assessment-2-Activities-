let boxSize;

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(20, 20, 35);

  //Move mouse to make square bigger
  boxSize = mouseX / 3;

  //Background Squares
  fill(80, 120, 255, 40);
  rect(250, 250, boxSize + 80, boxSize + 80);

  fill(255, 100, 150, 60);
  rect(250, 250, boxSize + 40, boxSize + 40);

  //Main square
  fill(255, 180, 80);
  rect(250, 250, boxSize, boxSize);

  //Small rotating effect
  push();
  translate(250, 250);
  rotate(frameCount * 0.01);

  fill(255, 255, 255, 80);
  rect(0, 0, boxSize / 2, boxSize / 2);
  pop();

  //Second small rotating square
  push();
  translate(250, 250);
  rotate(frameCount * 0.02);

  fill(255, 255, 255, 80);
  rect(0, 0, boxSize / 2, boxSize / 2);
  pop();


  //Text
  fill(255);
  textSize(18);
  text("Move mouse to glow brigher", 135, 40);
}
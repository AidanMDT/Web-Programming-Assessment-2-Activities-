function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {

  fill(mouseX, mouseY, 255);
  noStroke();

  circle(mouseX, mouseY, 50);
}
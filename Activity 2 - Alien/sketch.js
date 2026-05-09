let cl;
let linew;

function setup() {
  createCanvas(400, 400);
  background(220);

  cl = random(100, 255);
  linew = random(5, 15);

  stroke(cl, random(100, 255), random(100, 255));
  strokeWeight(linew);

  line(140, 100, 100, 60);
  line(100, 60, 60, 80);

  line(260, 100, 300, 60);
  line(300, 60, 340, 80);

  noStroke();

  fill(random(100, 255), random(100, 255), 150);
  circle(60, 85, 60);

  fill(random(100, 255), random(100, 255), 150);
  circle(340, 85, 60);

  fill(74, 211, 83);
  circle(200, 220, 250);

  fill(random(100, 255), random(100, 255), 150);
  circle(200, 140, 40);

  fill(0);
  triangle(110, 180, 190, 260, 110, 240);
  triangle(290, 180, 210, 260, 290, 240);

  fill(0);
  triangle(170, 310, 230, 310, 200, 335);
}
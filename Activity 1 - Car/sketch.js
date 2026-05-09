function setup() {
  createCanvas(672, 404);
  background(170, 180, 220);

  noStroke();

  //road
  push();
  fill(55);
  rect(0, 340, 672, 64);
  pop();

  //road lines
  push();
  fill(210, 190, 70);

  rect(0, 370, 35, 5);
  rect(85, 370, 35, 5);
  rect(170, 370, 35, 5);
  rect(255, 370, 35, 5);
  rect(340, 370, 35, 5);
  rect(425, 370, 35, 5);
  rect(510, 370, 35, 5);
  rect(595, 370, 35, 5);
  pop();

  //sun
  push();
  fill(235, 225, 50);
  circle(575, 45, 55);
  pop();

  //clouds
  push();
  fill(230);

  ellipse(90, 20, 140, 70);
  ellipse(140, 30, 120, 60);
  ellipse(40, 35, 110, 55);

  ellipse(390, 15, 140, 70);
  ellipse(440, 25, 120, 60);
  ellipse(340, 30, 110, 55);

  ellipse(650, 25, 140, 70);
  ellipse(700, 35, 120, 60);
  ellipse(600, 40, 110, 55);
  pop();

  //street lights
  push();
  fill(120);

  rect(50, 70, 12, 270);
  rect(230, 70, 12, 270);
  rect(430, 70, 12, 270);
  rect(610, 70, 12, 270);

  rect(44, 65, 24, 12);
  rect(224, 65, 24, 12);
  rect(424, 65, 24, 12);
  rect(604, 65, 24, 12);
  pop();

  //light glow
  push();
  fill(255, 250, 170);

  rect(52, 75, 20, 8);
  rect(232, 75, 20, 8);
  rect(432, 75, 20, 8);
  rect(612, 75, 20, 8);
  pop();

  //cybertruck body
  push();
  fill(195);

  quad(150, 280, 370, 235, 500, 290, 180, 290);
  rect(180, 290, 300, 40);
  triangle(150, 280, 180, 290, 180, 330);
  triangle(480, 290, 500, 290, 480, 330);
  pop();

  //windows
  push();
  fill(35);

  triangle(280, 257, 370, 235, 470, 285);

  rect(280, 257, 135, 20,);
  pop();

  //wheels
  push();
  fill(20);

  circle(220, 335, 70);
  circle(435, 335, 70);

  fill(35);

  circle(220, 335, 30);
  circle(435, 335, 30);
  pop();

  //headlights
  push();
  fill(255, 0, 0);
  rect(150, 278, 12, 5);

  fill(240);
  rect(490, 288, 12, 5);
  pop();
}
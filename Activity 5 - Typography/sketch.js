var word = "Hello World";
var font1;

function preload() {
  font1 = loadFont("fonts/BlackOpsOne-Regular.ttf");
}

function setup() {
  createCanvas(600, 400);
  background(0);

  fill(255);

  textFont(font1);
  textSize(100);

  textAlign(CENTER, CENTER);
  text(word, 300, 200);
}
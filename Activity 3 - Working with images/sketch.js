let img;

function preload() {
  img = loadImage("Mountain.jpg");
}

function setup() {
  createCanvas(700, 500);
  background(240);
  noStroke();


//Text in shape
  push();

  clip(textShape);
  fill(0);
  textSize(60);
  text("HELLO", 50, 120);
  pop();

//Image with clip

  push();
  clip(circleShape);
  image(img, 400, 30, 220, 150);
  pop();


  // Image with mask
  let m = createGraphics(150, 150);

  m.background(0);

  m.fill(255);
  m.circle(75, 75, 120);

  let newImg = img.get();

  newImg.resize(150, 150);
  newImg.mask(m);

  image(newImg, 450, 220);
}

function draw() {

  // Watter color effect
  let x = random(50, 300);
  let y = random(320, 480);
  let r = random(20, 80);

  fill(random(255), random(255), random(255), 50);

  ellipse(x, y, r, r);
}


function textShape() {
  circle(120, 90, 120);
}


function circleShape() {
  circle(510, 100, 150);
}
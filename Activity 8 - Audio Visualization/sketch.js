let mic; 

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(100);
  mic = new p5.AudioIn();
  
  mic.start();
}

function draw() {
  let micLevel = mic.getLevel() * height * 5;
  
  fill(random(255), random(255), random(255));
  
  circle(mouseX, mouseY, micLevel);
}

function mousePressed(){
  background(100);
}
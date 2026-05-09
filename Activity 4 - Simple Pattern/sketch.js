function setup() {
  createCanvas(400, 400);
  background(0);
  
  let cl;
  let linew;

  for (let y = 100; y <= 300; y += 100) {
    for (let x = 100; x <= 300; x += 100) {
      
      cl = random(255);
      linew = random(1, 10);

      strokeWeight(linew);
      stroke(cl, random(255), random(255));
      if (y == 200 && x == 200) {
        fill(255, 0, 0);
      } else {
        fill(random(255), random(255), random(255));
      }

      circle(y, x, 60);
    }
  }
}
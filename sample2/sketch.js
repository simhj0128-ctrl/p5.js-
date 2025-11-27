function setup() {
  createCanvas(600, 400);
  background(220);
  noLoop();
}

function draw() {
  fill(40);
  noStroke();
  ellipse(300, 210, 320, 360);
  ellipse(420, 320, 140, 140);

  fill(255, 220, 180);
  noStroke();
  rect(250, 340, 100, 60);

  fill(255, 220, 180);
  ellipse(300, 195, 280, 340);

  fill(40);
  noStroke();
  arc(300, 145, 280, 240, PI, TWO_PI, CHORD);

  fill(255, 220, 180);
  noStroke();
  triangle(
      250, 125,
      235, 150,
      265, 150
  );
  
  fill(255, 220, 180);
  noStroke();
  triangle(
      350, 125,
      335, 150,
      365, 150
  );
  
  fill(255, 220, 180);
  ellipse(150, 205, 40, 55);
  ellipse(450, 205, 40, 55);

  fill(255, 182, 193);
  noStroke();
  ellipse(150, 235, 15, 15);
  ellipse(450, 235, 15, 15);

  fill(255);
  ellipse(240, 175, 60, 38);
  ellipse(360, 175, 60, 38);

  fill(60, 40, 20);
  ellipse(240, 175, 36, 34);
  ellipse(360, 175, 36, 34);

  fill(255);
  ellipse(232, 168, 7, 7);
  ellipse(352, 168, 7, 7);

  noFill();
  stroke(180, 150, 120);
  strokeWeight(1);
  arc(240, 166, 68, 30, PI, TWO_PI);
  arc(360, 166, 68, 30, PI, TWO_PI);

  noStroke();
  fill(230, 190, 160);
  ellipse(300, 220, 38, 22);

  fill(200, 50, 80);
  noStroke();
  arc(300, 270, 110, 70, 0, PI, CHORD);
  fill(0);
  arc(300, 270, 90, 45, 0, PI, CHORD);
}
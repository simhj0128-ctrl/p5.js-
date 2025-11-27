function setup() {
  createCanvas(600, 400);
  background("#FAF3DD");
  noStroke();

  fill("#CDB4DB");
  circle(300, 200, 250);

  fill("#FFB5A7"); 
  circle(200, 200, 130);

  fill("#BDE0FE"); 
  circle(400, 200, 130);

  fill("#A8DADC");
  triangle(300, 80, 250, 160, 350, 160);
  triangle(300, 320, 250, 240, 350, 240);

  fill("#FFAFCC");
  arc(300, 200, 300, 300, HALF_PI, PI, PIE);

  stroke("#6D597A");
  strokeWeight(12);
  point(300, 200);
}

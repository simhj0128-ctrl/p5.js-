let targetColor, startColor;
let maxRadius;
let captureStarted = false;

function setup() {
  createCanvas(600, 400);
  frameRate(20);
  targetColor = color(random(255), random(255), random(255));
  startColor = color("#FAF3DD"); 
  maxRadius = 250;
  colorMode(RGB);
}

function draw() {
  let timeElapsed = millis() * 0.0001; 
  let lerpAmount = (sin(timeElapsed) + 1) / 2;

  let currentColor = lerpColor(startColor, targetColor, lerpAmount);
  background(currentColor);

  if (frameCount % (30 * 3) === 0) {
    targetColor = color(random(255), random(255), random(255));
    startColor = currentColor;
  }
  
  noStroke();

  let sizeScale = map(sin(frameCount * 0.05), -1, 1, 0.8, 1.2);
  let currentRadius = maxRadius * sizeScale;

  let xOffset = sin(frameCount * 0.03) * 20;
  let yOffset = cos(frameCount * 0.04) * 15;

  fill("#CDB4DB");
  circle(300 + xOffset, 200 + yOffset, currentRadius);

  let circleX_L = 200 + cos(frameCount * 0.08) * 50; 
  let circleX_R = 400 + sin(frameCount * 0.08) * 50; 

  fill("#FFB5A7"); 
  circle(circleX_L, 200, 130);
  fill("#BDE0FE"); 
  circle(circleX_R, 200, 130);

  push();
  translate(300, 200);
  let angle = frameCount * 0.02;
  rotate(angle);

  fill("#A8DADC");
  triangle(0, -120, -50, -40, 50, -40);
  triangle(0, 120, -50, 40, 50, 40); 

  pop();

  let arcFillColor = frameCount % 255;
  fill(arcFillColor, 175, 204, 200); 
  arc(300, 200, 300, 300, HALF_PI, PI, PIE);

  let pointX = 300 + sin(frameCount * 0.1) * 100;
  let pointY = 200 + cos(frameCount * 0.1) * 50;
  let pointWeight = map(sin(frameCount * 0.15), -1, 1, 5, 15);

  stroke("#6D597A");
  strokeWeight(pointWeight);
  point(pointX, pointY);
  
  if (frameCount > 90 && !captureStarted) { 
      saveGif('p5.js', 10);
      captureStarted = true;
  }
}
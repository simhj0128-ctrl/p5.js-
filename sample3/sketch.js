let faceX = 0;
let faceY = 0;
let blink = false;
let mouthOpen = true;

function setup() {
  createCanvas(600, 400);
  saveGif("과제3", 10);
}

function draw() {
  let t = frameCount % 200;
  let colorPhase = t / 200.0;
  let r = 230 + 25 * sin(TWO_PI * colorPhase);
  let g = 200 + 30 * sin(TWO_PI * colorPhase + PI / 2);
  let b = 255 + 20 * sin(TWO_PI * colorPhase + PI);
  background(r, g, b);

  if (mouseIsPressed) {
    faceY = sin(frameCount * 0.3) * 10;
  } else {
    faceY = 0;
  }

  if (keyIsPressed) {
    mouthOpen = !mouthOpen;
  }

  if (keyIsPressed) {
    if (keyCode === LEFT_ARROW) {
      faceX -= 3;
    } else if (keyCode === RIGHT_ARROW) {
      faceX += 3;
    }
  }

  fill(40);
  noStroke();
  ellipse(300 + faceX, 210 + faceY, 320, 360);
  ellipse(420 + faceX, 320 + faceY, 140, 140);

  fill(255, 220, 180);
  noStroke();
  rect(250 + faceX, 340 + faceY, 100, 60);

  fill(255, 220, 180);
  ellipse(300 + faceX, 195 + faceY, 280, 340);

  fill(40);
  noStroke();
  arc(300 + faceX, 145 + faceY, 280, 240, PI, TWO_PI, CHORD);

  fill(255, 220, 180);
  noStroke();
  triangle(250 + faceX, 125 + faceY, 235 + faceX, 150 + faceY, 265 + faceX, 150 + faceY);
  
  fill(255, 220, 180);
  noStroke();
  triangle(350 + faceX, 125 + faceY, 335 + faceX, 150 + faceY, 365 + faceX, 150 + faceY);

  fill(255, 220, 180);
  ellipse(150 + faceX, 205 + faceY, 40, 55);
  ellipse(450 + faceX, 205 + faceY, 40, 55);

  fill(255, 182, 193);
  noStroke();
  ellipse(150 + faceX, 235 + faceY, 15, 15);
  ellipse(450 + faceX, 235 + faceY, 15, 15);

  if (frameCount % 40 < 4) blink = true; else blink = false;

  if (!blink) {
    fill(255);
    ellipse(240 + faceX, 175 + faceY, 60, 38);
    ellipse(360 + faceX, 175 + faceY, 60, 38);

    fill(60, 40, 20);
    ellipse(240 + faceX, 175 + faceY, 36, 34);
    ellipse(360 + faceX, 175 + faceY, 36, 34);

    fill(255);
    ellipse(232 + faceX, 168 + faceY, 7, 7);
    ellipse(352 + faceX, 168 + faceY, 7, 7);

    noFill();
    stroke(180, 150, 120);
    strokeWeight(1);
    arc(240 + faceX, 166 + faceY, 68, 30, PI, TWO_PI);
    arc(360 + faceX, 166 + faceY, 68, 30, PI, TWO_PI);
  } else {
    fill(0);
    rect(210 + faceX, 175 + faceY, 60, 5);
    rect(330 + faceX, 175 + faceY, 60, 5);
  }

  noStroke();
  fill(230, 190, 160);
  ellipse(300 + faceX, 220 + faceY, 38, 22);

  if (mouthOpen) {
    fill(200, 50, 80);
    arc(300 + faceX, 270 + faceY, 110, 70, 0, PI, CHORD);
    fill(0);
    arc(300 + faceX, 270 + faceY, 90, 45, 0, PI, CHORD);
  } else {
    fill(150, 0, 50);
    arc(300 + faceX, 270 + faceY, 100, 20, 0, PI, CHORD);
  }
}
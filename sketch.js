let cols = 1;
let rows = 1;
let clickcount = 0;
let tenclicks = 10;
let maxclicks = 15;

function setup() {
  createCanvas(600, 600);
  angleMode(RADIANS);
  noLoop(); 
}

function draw() {
  background(0);

  let gridWidth = 450;
  let gridHeight = 450;
  let offsetX = (width - gridWidth) / 2;
  let offsetY = (height - gridHeight) / 2;

  let spacingX = gridWidth / (cols + 1);
  let spacingY = gridHeight / (rows + 1); 

  let numLines = 1;
  
  for (let col = 1; col <= cols; col++) {
    for (let row = 1; row <= rows; row++) {
      let x = offsetX + spacingX * col;
      let y = offsetY + spacingY * row;
      drawRadialLines(x, y, numLines);
      numLines += 1;
    }
  }

  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(20);

  if (clickcount < tenclicks) {
    text("Click for more!", width / 2, height - 50);
  } else if (clickcount < maxclicks) {
    text("Still going?", width / 2, height - 50);
  } else {
    text("Okay, that's enough!!!", width / 2, height - 50);
  }
}

function drawRadialLines(x, y, lines) {
  push();
  translate(x, y);
  stroke(255);
  strokeWeight(1);
  for (let i = 0; i < lines; i++) {
    let angle = TWO_PI * i / lines;
    let xEnd = cos(angle) * 30;
    let yEnd = sin(angle) * 30;
    line(0, 0, xEnd, yEnd);
  }
  pop();
}

function mousePressed() {
  if (clickcount < maxclicks) {
    cols++;
    rows++;
    clickcount++;
    redraw(); 
  }
}

const barWidth = 20;
let lastBar = -1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, height, height, height);
  noStroke();
}

function draw() {
  let whichBar = mouseX / barWidth;
  if (whichBar !== lastBar) {
    let barX = whichBar * barWidth;
    fill(mouseY, height, height);
    rect(barX, 0, barWidth, height);
    lastBar = whichBar;
  }
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight)
}

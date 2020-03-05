function setup() {
  createCanvas(windowWidth, windowWidth);;
  colorMode(HSB, height, height, height);
}

function draw() {
  // Call the variableEllipse() method and send it the
  // parameters for the current mouse position
  // and the previous mouse position
  variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
}

// The simple method variableEllipse() was created specifically
// for this program. It calculates the speed of the mouse
// and draws a small ellipse if the mouse is moving slowly
// and draws a large ellipse if the mouse is moving quickly

function variableEllipse(x, y, px, py) {
  let speed = abs(x - px) + abs(y - py);
  stroke(speed);
  fill(mouseX, height, height);
  ellipse(x, y, speed, speed);
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight)
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  stroke(255);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}



function windowResized() {
  resizeCanvas(windowWidth,windowHeight)
}

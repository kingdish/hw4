var maxFreq = 300;
var minFreq = 100;
var freqA = minFreq;
var oscA;

var playingA = false;

function setup() {
  createCanvas(400, 400);
  noStroke();
  backgroundColor = color(255, 0, 255);
  textAlign(CENTER);
  
  oscA = new p5.Oscillator();
  oscA.setType('triangle');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();
}

var aLength = 0;

function draw() {
  background(255);
  if (playingA) {
    if (aLength < height) {
    	aLength += 1;
    }
    fill(70);
    rect(0, height, width, -aLength);
  }
  if (!playingA && aLength != 0) {
    fill(70);
    aLength -= 2;
    rect(0, height, width, -aLength);
  }
}

function mouseDragged() {
  oscA.freq((maxFreq - minFreq) * (height - mouseY) / height + minFreq);
}

function keyPressed() {
  var osc;
  if (key == 'A') {
    playingA = true;
    osc = oscA;
  }
  if (osc) {
    osc.amp(0.5, 0.1);
  }
}

function keyReleased() {
  var osc;
  if (key == 'A') {
    osc = oscA;
    playingA = false;
  }
  if (osc) {
    osc.amp(0, 0.5);
  }
}

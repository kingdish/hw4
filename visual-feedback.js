var freqA = 174;
var freqS = 196;
var freqD = 220;
var freqF = 246;

var oscA, oscS, oscD, oscF;

var playingA = false;
var playingS = false;
var playingD = false;
var playingF = false;

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
  
  oscS = new p5.Oscillator();
  oscS.setType('triangle');
  oscS.freq(freqS);
  oscS.amp(0);
  oscS.start();
  
  oscD = new p5.Oscillator();
  oscD.setType('triangle');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();
  
  oscF = new p5.Oscillator();
  oscF.setType('triangle');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();
}

var aLength = 0;
var sLength = 0;
var dLength = 0;
var fLength = 0;

function draw() {
  background(255);
  if (playingA) {
    fill(70);
    aLength += 1;
    rect(0, height, width/4, -aLength);
  }
  if (playingS) {
    fill(100);
    sLength += 1;
    rect(width/4, height, width/4, -sLength);
  }
  if (playingD) {
    fill(130);
    dLength += 1;
    rect(width/4 * 2, height, width/4, -dLength);
  }
  if (playingF) {
    fill(160);
    fLength += 1;
    rect(width/4 * 3, height, width / 4, -fLength);
  }
  if (!playingA && aLength != 0) {
    fill(70);
    aLength -= 2;
    rect(0, height, width/4, -aLength);
  }
  if (!playingS && sLength != 0) {
    fill(100);
    sLength -= 2;
    rect(width/4, height, width/4, -sLength);
  }
  if (!playingD && dLength != 0) {
    fill(130);
    dLength -= 2;
    rect(width/4 * 2, height, width/4, -dLength);
  }
  if (!playingF && fLength != 0) {
    fill(160);
    fLength -= 2;
    rect(width/4 * 3, height, width/4, -fLength);
  }
}

function keyPressed() {
  var osc;
  if (key == 'A') {
    playingA = true;
    osc = oscA;
  } else if (key == 'S') {
    playingS = true;
    osc = oscS;
  } else if (key == 'D') {
    playingD = true;
    osc = oscD;
  } else if (key == 'F') {
    playingF = true;
    osc = oscF;
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
  } else if (key == 'S') {
    osc = oscS;
    playingS = false;
  } else if (key == 'D') {
    osc = oscD;
    playingD = false;
  } else if (key == 'F') {
    osc = oscF;
    playingF = false;
  }
  if (osc) {
    osc.amp(0, 0.5);
  }
}

// N-gon Generator
//
// Program to generate a regular n-gon
//
// By Miles Elvidge

function setup() {
  createCanvas(600, 600);
  background(51);
  stroke(255);
  noFill();
}

function draw() {
  ngon(5,200,100,100);
}

function ngon(n, r, x, y) {
  var points = [];
  for(var i = 0; i < n; i++) {
    var x = r * cos((TWO_PI * i)/n) + x;
    var y = r * sin((TWO_PI * i)/n) + y;
    point(x,y);
    points.push(createVector(x, y));
  }
  return points;
}

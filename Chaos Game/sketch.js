// Chaos Game, inspired by Numberphile
//
// Link: https://www.youtube.com/watch?v=kbKtFN71Lfs
//
// By Miles Elvidge, 27/04/17

var order = 3; // Number of points to display/work with
var ratio = 1/2; // Distance accross lines.

var points = []; // 2D array for points on the screen

var current;
var pos;
var iteration;
var depth;
function setup() {
  createCanvas(600, 600);
  fill(255);
  stroke(255);

  sirTriangle();
}

function generate() {
  if(document.getElementsByName('orderBox')[0].value != ''
  && document.getElementsByName('ratioBox')[0].value != '') {
    background(51);
    order = document.getElementsByName('orderBox')[0].value;
    ratio = document.getElementsByName('ratioBox')[0].value;

    document.getElementsByName('orderBox')[0].value = '';
    document.getElementsByName('ratioBox')[0].value = '';

    points = ngon(order,1500/order,100,100);
    fill(255);
    for(var point in points) {
      ellipse(point.x, point.y, 5, 5);
    }

    iteration = 0;
    newIteration();
  }
}

function newIteration() {
  iteration++;
  //console.log("Starting new iteration: "+iteration);
  // Starting vertex vertex
  var i = round(random(order-1));
  // Assign position to starting vertex
  pos = points[i];

  // Target Vertex
  var j = round(random(order-1));
  current = points[i];

  depth = 1;
}

function draw() {
  var rand = random(order); // Select target
  while(depth < 20) {
    var i = round(random(order-1)); // Choose target index
    current = points[i];
    var x = (current.x + pos.x) * ratio;
    var y = (current.y + pos.y) * ratio;
    ellipse(x, y, 1, 1);
    pos = createVector(x, y);
    depth++;
  }
  newIteration();
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

function sirPentagon() {
  document.getElementsByName('orderBox')[0].value = 5;
  document.getElementsByName('ratioBox')[0].value = 0.315;
  generate();
}

function sirTriangle() {
  document.getElementsByName('orderBox')[0].value = 3;
  document.getElementsByName('ratioBox')[0].value = 0.5;
  generate();
}

function sirHexagon() {
  document.getElementsByName('orderBox')[0].value = 6;
  document.getElementsByName('ratioBox')[0].value = 1/3;
  generate();
}

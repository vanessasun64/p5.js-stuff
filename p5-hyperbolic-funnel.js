var posX;
var posY;
var radiusX, radiusY;
var time;
var dir;
var x = 2;
var y = 2;

function setup() {
  createCanvas(500, 500);
  background(255);
  posX = posY = 0;
  radiusX = radiusY = 200;
  time = 0;
  dir = 0;

}

function draw() {
  background(255);
  stroke(0);
  fill(255, 230, 71);
  ellipse(width / 2, height / 2, 200 * 2, 200 * 2);
  fill(0);
  rect(440, 215, 30, 70);

  //center
  fill(0);
  ellipse(250, 250, 30, 30);

  //ring 0 outside
  noFill();
  stroke(235, 214, 12);
  ellipse(250, 250, 375, 375);

  //ring 1 outside
  noFill();
  stroke(235, 214, 12);
  ellipse(250, 250, 350, 350);

  //ring 2 outside
  noFill();
  stroke(235, 214, 12);
  ellipse(250, 250, 325, 325);

  //ring 3 outside
  noFill();
  stroke(235, 214, 12);
  ellipse(250, 250, 300, 300);

  //ring 4 outside
  noFill();
  stroke(235, 214, 12);
  ellipse(250, 250, 275, 275);

  //ring 5 outside
  noFill();
  stroke(235, 214, 12);
  ellipse(250, 250, 250, 250);

  //ring 6 outside
  noFill();
  stroke(235, 214, 12);
  ellipse(250, 250, 225, 225);

  //ring 7 outside
  noFill();
  stroke(235, 214, 12);
  ellipse(250, 250, 200, 200);

  //ring 8 outside
  noFill();
  stroke(235, 214, 12);
  ellipse(250, 250, 175, 175);

  //ring 9 outside
  noFill();
  stroke(235, 214, 12);
  ellipse(250, 250, 150, 150);

  //ring 10 outside
  noFill();
  stroke(235, 214, 12);
  ellipse(250, 250, 125, 125);

  //ring 11 outside
  noFill();
  stroke(235, 214, 12);
  ellipse(250, 250, 100, 100);

  //ring 12 outside
  noFill();
  stroke(235, 214, 12);
  ellipse(250, 250, 75, 75);

  //ring 13 outside
  noFill();
  stroke(235, 214, 12);
  ellipse(250, 250, 50, 50);

  // orbiting
  speed = 0.03;
  time += dir * speed; // how fast the circle goes
  speed += time;
  var gravity = 0.09;

  radiusX -= dir * gravity;
  radiusY -= dir * gravity;

  posX = radiusX * cos(time);
  posY = radiusY * sin(time);
  translate(width / 2, height / 2);
  stroke(2);
  fill(128, 140, 158);

  ellipse(posX, posY, 60, 60);

  x = x + 2;
  y = y + 2;

  /*	if (posX = 1 || posY = 1)
  		posX = radiusX * cos(time);*/

}

function keyPressed() {
  if (key === " ") {
    if (dir == 1) {
      dir = 0;
    } else {
      dir = 1;
    }
  }
}

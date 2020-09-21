let balls = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

class Ball {
 // here is where you’ll put the instructions for making balls
 constructor(x,y){
		this.x = x;
    		this.y = y;
          }

}

function keyPressed(){

  let  b = new Ball(100, 100);
  balls.push(b);
  print(balls);
}

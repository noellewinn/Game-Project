let balls = [];
let myShapes = [];

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220, 180,300);

  for (let i = 0; i < balls.length; i++){
	 balls[i].drawBall();
      balls[i].moveBall();
	}

  for (let i = 0; i < myShapes.length; i++){
	 myShapes[i].drawMyShape();
      myShapes[i].moveMyShape();
}
}


function keyPressed(){
  if (keyCode === DOWN_ARROW){
    let  b = new Ball(random(0,100), random(0,100));
    balls.push(b);
    print(balls);
  }
else if (keyCode === UP_ARROW) {
  let a = new myShape(random(0,23), random(0,78));
  myShapes.push(a);
  print(myShapes);
}

}

class Ball {
 // here is where you’ll put the instructions for making balls
 constructor(x,y){
		this.x = x;
    		this.y = y;
          }

    drawBall(){
      stroke(0.5);
      fill(90,20,100);
      ellipse(this.x,this.y,random(20),random(20));
    }

    moveBall(){
      this.x = this.x + random(1,0.2)
      this.y = this.y + random(0.3,2.1)
    }
}

class myShape {

  constructor(x,y){
    this.x = x
    this.y = y
  }
  drawMyShape() {
    stroke(1)
    fill(random(0,129),random(0,237),random(0,176))
    rect(this.x,this.y,20,600)
  }
  moveMyShape(){
    this.x = this.x + random(0.8,2.3)
    this.y = this.y + random(0.23,2)
  }
}

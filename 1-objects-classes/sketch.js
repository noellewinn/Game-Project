
let b;
let anotherBall;
let blob1;
let anotherBlob


function setup() {
  createCanvas(300, 300);
  background(150,200,250)
  b = new Ball(10,100,"red");
  anotherBall = new Ball(200,20,"green");
  blob1 = new Blob(150,120);
  anotherBlob = new Blob(250,200);

  b.drawBall();
  b.moveBall();
  anotherBall.drawBall();
  anotherBall.moveBall();
  blob1.drawBlob();
  blob1.moveBlob();
  anotherBlob.drawBlob();
  anotherBlob.moveBlob();
}

function draw() {




}



class Ball {

  constructor(x,y,color){
    this.x = x;
    this.y = y;
    this.color = color;
  }
  drawBall(){
    stroke(2);
    fill(this.color);
    ellipse(this.x,this.y,10,10);
  }
  moveBall(){
    this.x = this.x +2;
    this.y = this.y +5;
  }
}

class Blob {
  constructor(x,y){
    this.x = x;
    this.y = y;

  }

  drawBlob(){
    stroke(0.5);
    fill(200);
    ellipse(this.x,this.y,20,20);
    ellipse(this.x+20,this.y-20,30,30);
    ellipse(this.x-30,this.y-30,40,40);
  }

  moveBlob(){
    this.x = this.x +8;
    this.y = this.y +14;
  }
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine;
var player1,player2;
var basket;
var playerdribbling,playershooting;
var basketState="down";
var score=0

function preload(){

  playerdribbling=loadImage("playerdribbling.png");
  playershooting=loadImage("playershooting.png");

}

function setup() {
  createCanvas(1800,600);

	engine = Engine.create();
	world = engine.world;

  ground= new Ground(780,550,1700,25);
  ball=new Ball(470,315,50);
  wall=new Ground(1200,300,20,600);
  basket=new Basket(1140,150,20);
  game=new Game();

}

function draw() {

	Engine.update(engine);

  background(255,255,255);  

  fill("lightgreen")
  textSize(30)
  text("Score  " + score,50,50)

  drawSprites();

  ball.display();

  basket.display();

  wall.display();

  ground.display();

  if(keyWentDown(UP_ARROW) && ball.body.position.x===470 && ball.body.position.y===315){
    console.log("pressed")
    Matter.Body.setStatic(ball.body,false)
    Matter.Body.applyForce(ball.body,ball.body.position,{x:0.5,y:-0.3})
    //console.log(ball.position.x);
    //console.log(ball.position.y);
  }

  if(basket.body.position.y<50){
    basketState="down"
  }

  else if(basket.body.position.y>500){
    basketState="up"
  }


  if(basketState==="down"){
    basket.body.position.y+=5
  }

  else{
    basket.body.position.y-=5
  }

  detectCollision(ball,basket);

}

function keyPressed(){

	

  if(keyCode === 32){

    Matter.Body.setPosition(ball.body,{x:470,y:315});
    Matter.Body.setStatic(ball.body,true)


  }

}

  function detectCollision(lball,lbasket){

    basketBodyPosition=lbasket.body.position
    ballBodyPosition=lball.body.position
    
    var distance=dist(ballBodyPosition.x,ballBodyPosition.y,basketBodyPosition.x,basketBodyPosition.y)
    
    if(basketBodyPosition.x-ballBodyPosition.x<lball.r+lbasket.r&&
      ballBodyPosition.x-basketBodyPosition.x<lball.r+lbasket.r&&
      basketBodyPosition.y-ballBodyPosition.y<lball.r+lbasket.r&&
      ballBodyPosition.y-basketBodyPosition.y<lball.r+lbasket.r){
    
        Matter.Body.setPosition(lball.body,{x:470,y:315})
        Matter.Body.setStatic(lball.body,true)
        score+=1
    
  console.log("its touching");

    }
    
}
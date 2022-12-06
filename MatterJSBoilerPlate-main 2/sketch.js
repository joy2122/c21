
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var world;
var radius = 40;
function setup() {
	createCanvas(1600, 700);

	rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball=Bodies.circle(200,100,radius/2,ball_options);
	World.add(world,ball)
	groundobj=new ground(width/2,690,width,20)
	leftSide=new ground(1100,600,20,120)
	rightSide=new ground(1350,600,20,120)
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,radius,radius)
groundobj.display();
leftSide.display();
rightSide.display(  );

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
  
	}
}


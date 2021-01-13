
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperBall;
var floor;

var trashcan;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperBall = new BaseClass(200, 450, 50, 50);
	floor = new GroundClass(400, 670, 800, 20);
	
	trashcan = new DustBin(220, 160);

	/**
	 * rightWall = new DustBin(500, 570, 20, 200);
	 * leftWall = new DustBin(300, 570, 20, 200);
	 * bottomWall = new DustBin(400, 650, 220, 20);
     */
	
	 //console.log(paperBall.getObject())

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);


  trashcan.display();

  floor.display();
  paperBall.display();
}

function keyPressed() {
	switch (keyCode) {
		case UP_ARROW:
			Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:0,y:-30});
			break;
		case RIGHT_ARROW:
			Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:25,y:0});
			break;
		case LEFT_ARROW:
			Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:-25,y:0});
			break;
	} 
}


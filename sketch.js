const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var paperObject;
var ground;
var dustbin;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	paperObject = new paper(200,450,70)
	ground = new Ground(200,680,10000,10);
	dustbin = new Dustbin(1100,650)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  paperObject.display();
  ground.display();
  dustbin.display();
}

function keyPressed() {
	 if (keyCode === UP_ARROW) {
		  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145}); 
		} 
	}


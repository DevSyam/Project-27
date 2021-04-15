
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var ground1;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(width/2, 100, 350, 30);
	bob1 = new Bob(width/2, 400)
	bob2 = new Bob(width/2 + 50,  400)
	bob3 = new Bob(width/2 + 100,  400)
	bob4 = new Bob(width/2 - 50, 400)
	bob5 = new Bob(width/2 - 100, 400)

	rope1 = new Rope(bob1.body, ground1.body, 0, 0);
	rope2 = new Rope(bob2.body, ground1.body, 50, 0);
	rope3 = new Rope(bob3.body, ground1.body, 100, 0);
	rope4 = new Rope(bob4.body, ground1.body, -50, 0);
	rope5 = new Rope(bob5.body, ground1.body, -100, 0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  ground1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}




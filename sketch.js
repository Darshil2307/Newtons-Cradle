const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof1;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var radius = 20;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bob1 = new bob(270,400,20);
	bob2 = new bob(310,400,20);
	bob3 = new bob(350,400,20);
	bob4 = new bob(390,400,20);
	bob5 = new bob(430,400,20);

	roof1 = new roof(350,150,300,30);

	rope1 = new rope(bob1.body,roof1.body,-radius*4,0);
	rope2 = new rope(bob2.body,roof1.body,-radius*2,0);
	rope3 = new rope(bob3.body,roof1.body,-radius*0,0);
	rope4 = new rope(bob4.body,roof1.body,radius*2,0);
	rope5 = new rope(bob5.body,roof1.body,radius*4,0);


	Engine.run(engine);
  
}

function draw() {
	rectMode(CENTER);
	background(255);
  
	roof1.display();
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
  
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ 
		console.log("success");
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50});
	 }
    }

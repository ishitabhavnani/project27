
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var roof;
var myEngine, myWorld;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	myEngine = Engine.create();
	myWorld = myEngine.world;

	//Create the Bodies Here.
	
	bob1=new Bob(250,500,60);
	bob2=new Bob(310,500,60);
	bob3=new Bob(370,500,60);
	bob4=new Bob(430,500,60);
	bob5=new Bob(490,500,60);

	roof=new Roof(375,100,400,50)
	
	rope1= new Rope(bob1.body,roof.body,20,100);
  
}


function draw() {
  rectMode(CENTER);
  background("blue"); 
  Engine.update(myEngine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.displayGround();
  
  rope1.display();
  drawSprites();
 
}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var ball1,ball2,ball3, ball4,ball5, boxObject
var rope1,rope2,rope3, rope4,rope5;
var world;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boxObject=new box(400,250,230,20);
	ball1 = new ball(320,575,40)
	ball2 = new ball(360,575,40)
	ball3 = new ball(400,575,40)
	ball4 = new ball(440,575,40)
	ball5 = new ball(480,575,40)

	rope1=new rope(ball1.body,boxObject.body,-80, 0)
	rope2=new rope(ball2.body,boxObject.body,-40, 0)
	rope3=new rope(ball3.body,boxObject.body,0, 0)
	rope4=new rope(ball4.body,boxObject.body,40, 0)
	rope5=new rope(ball5.body,boxObject.body,80, 0)
	Engine.run(engine);
  
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	
		 Matter.Body.applyForce(ball1.body,ball1.body.position,
								{x:-50,y:-45});
		 }
		}
function draw() {
  rectMode(CENTER);
  background(0);
  boxObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 ball1.display();
  ball2.display();
  
  ball3.display();
  ball4.display();
  ball5.display();

 
 
}




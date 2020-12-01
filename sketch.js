
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(800,680);
	box1 = new Box(600,610,20,100);
	box2 = new Box(740,610,20,100);
	box3 = new Box(670,660,160,20); 
	Paper1 = new Paper(200,450,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  Paper1.display();
  
 
}


function keyPressed(){
    if (keyCode === UP_ARROW){
        Matter.Body.applyForce(Paper1.body, Paper1.body.position, {x:85, y:-45})
    }
}




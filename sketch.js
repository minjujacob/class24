
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustBinX, dustBinY; 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

    dustBinX=width/2-100;
	dustBinY=610; 

	boxLeftBody = new DustBin(dustBinX+20, dustBinY+8, 20,100); 
	boxBottomBody = new DustBin(dustBinX+105, dustBinY+48, 152,20); 
	boxRightBody = new DustBin(dustBinX+200-10 , dustBinY+8, 20,100);

	paper = new Paper(150,300,10);

	ground = new Ground(400,680,800,20);
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  boxLeftBody.display();
  boxBottomBody.display(); 
  boxRightBody.display();
  ground.display();

 //drawSprites();
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:8,y:-15});
	}
}




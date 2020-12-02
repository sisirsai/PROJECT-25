
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin,ground,paper,block1,block2;

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	dustbin = new Block(1070,4400);
	ground= new Ground(650,500,width+100,20);
	paper= new Paper(100,200,128,128);
	block1 = new Ground(1100,440,5,100);
	block2 = new Ground(1000,440,5,100);
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  ground.display("gray");
  paper.display();
  block1.display("skyblue");
  block2.display("skyblue");
  dustbin.display();
  fill(255,20,147);
  textSize(70);
  text("THROW TRASH IN THE DUSTBIN",50,100)
  
 

 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
 Matter.Body.applyForce(paper.body,paper.body.position,{x:880,y:-880});
	}
}





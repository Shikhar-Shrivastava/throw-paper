
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
	
	ball = new cball(100,100,25);

	theground = new Ground(400, 675, 800,20)

	stopper = new Ground(0.1,625,10,100)
	stopper2 = new Ground(800.1,625,10,800)

	box = new Box(582,605,15,100)
	box2 = new Box(716,605,15,100)
	box3 = new Box(650,655,150,15)
	Engine.run(engine);
  
}


function draw() {
  background("lightgreen");
  rectMode(CENTER);

  ball.display();

  theground.display()

  stopper.display()
  stopper2.display()


  box.display();
  box2.display();
  box3.display();

  ballthrow();
  
  drawSprites();
}

function ballthrow(){
	if(keyWentDown(RIGHT_ARROW)){
		Body.applyForce(ball.body,ball.body.position,{x:85,y:-80})
	}
	else if(keyWentDown(LEFT_ARROW)){
		Body.applyForce(ball.body,ball.body.position,{x:-85,y:-80})
	}
}


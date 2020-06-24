const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground;
var object;
var world;
var slingShot;

function preload()
{
	polygon_img = loadImage("Images/hexagon.png");
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
    //ground
	stand = new Ground(400,650,300,20);
	//level two
	block8 = new Box(330,235,30,40);
	block9 = new Box(360,235,30,40);
	block10 = new Box(390,235,30,40);
	block11 = new Box(420,235,30,40);
	block12 = new Box(450,235,30,40);
	//level three
	block13 = new Box(360,195,30,40);
	block14 = new Box(390,195,30,40);
	block15 = new Box(420,195,30,40);
	//top
	block16 = new Box(390,155,30,40);

	

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
 
 slingShot = new Launcher(this.polygon,{x:100,y:200});


}


function draw() {
  background("green");
 // Engine.update(engine);
  stand.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);
  slingShot.display();

  drawSprites();
 
}


function mouseDragged(){
	Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
	}
	
	function mouseReleased(){
		slingShot.fly();
	}



function keyPressed(){
    if(keyCode===32){
      slingshot.attach(this.polygon);
    }
}

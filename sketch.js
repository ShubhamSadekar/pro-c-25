const Render = Matter.Render;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
  createCanvas(1600, 700);
  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   paper = new Paper(200,450,40);
   
     dustbin = new Dustbin (1100,650);
     ground = new Ground(width/2,670,width,20)
     
     var render = Render.create({
        element: document.body, 
        engine: engine, 
        options: {
           width: 1200,
            height: 700, 
            wireframes: false } }); 
            Engine.run(engine);


}
function draw() {
  rectMode(CENTER);
  background(0);
  paper.display()
  dustbin.display();
  ground.display();
 
}

function keyPressed(){

  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  }

}



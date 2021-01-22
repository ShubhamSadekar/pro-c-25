class Dustbin
{

constructor(x,y){
   var options = {
      isStatic:true
   }
   this.x=x;
		this.y=y;
		
		this.dustbinWidth=200;
		this.dustbinHeight=200;
		this.wallThickness=20;	
		this.angle=0;	
 

      this.image = loadImage("sprites/dustbingreen.png")
   this. bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, options);
   
    this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, options)
    this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, options)
    Matter.Body.setAngle(this.leftWallBody,this.angle);
    Matter.Body.setAngle(this.rightWallBody,(-1)*this.angle);
    World.add(world,this.leftWallBody);
    World.add(world,this.rightWallBody);
    World.add(world,this.bottomBody);

}
display(){

   
			var posLeft=this.leftWallBody.position;
       
         push();
    
  //this.bottomBody. translate(posLeft.x, posLeft.y);

  translate(posLeft.x, posLeft.y);
   rectMode(CENTER)
   //strokeWeight(4);
   angleMode(RADIUS)
   fill(255)
   rotate(this.angle)
   rect(0,0,this.wallThickness, this.dustbinHeight);
   
  pop();
  
  var posRight=this.rightWallBody.position;
       
         push();
    
  

  translate(posRight.x, posRight.y);
   rectMode(CENTER)
   //strokeWeight(4);
   angleMode(RADIUS)
   fill(255)
   rotate(-1*this.angle)
   rect(0,0,this.wallThickness, this.dustbinHeight);
   
  pop();
   
   
  var posBottomBody=this.bottomBody.position
  push();
  translate(posBottomBody.x, posBottomBody.y);
  imageMode(CENTER)
  //strokeWeight(4);
  angleMode(RADIUS)
  fill(255)
  image(this.image,0,-this.dustbinHeight/2,this.dustbinWidth,this.dustbinHeight);
  //rect(0,0,this.dustbinHeight,this.wallThickness);
  
 pop();

  
   
}



}
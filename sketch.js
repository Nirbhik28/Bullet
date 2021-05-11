var bullet,wall;
var speed ,weight;
var damage,thickness;

function setup() {
  createCanvas(1600,400);
  
  speed=Math.round(random(233,321));
  weight=Math.round(random(30,52));
  bullet=createSprite(50,200,50,25);
  thickness=Math.round(random(22,83))
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=(80,80,80)
  bullet.velocityX=speed;
  bullet.depth=wall.depth+4;
  bullet.shapeColor="white";

}

function draw() {
  background(0,0,0);
  fill(255,255,255);
  textSize(20);
  text("Speed : "+speed+"km/hr",400,20);
  text("Weight : "+weight+"kg",1200,20);
  text("Thickness : "+thickness+"cm",800,20);
  
  if(hasCollided(bullet,wall)) {
    bullet.x=1200-(25+thickness/2)
    bullet.velocityX=0;
    bulletRightEdge=wallLeftEdge
    
   damage=Math.round(0.5*speed*speed*weight/(thickness*thickness*thickness))
    
    
    if(damage>=10){
     bullet.shapeColor=color(255,0,0)
     fill(255,0,0)
     textSize(20)
     text("Damage : " + damage,600,220)
     text("Wall is not safe",600,200) 
     
    }
   else {
      bullet.shapeColor=color(0,255,0)
      textSize(20)
      fill(0,255,0)
      text("Damage : " + damage,600,220)
      text("Wall is safe",600,200)
      
    }
    
  }
 
    drawSprites();
  
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=bullet.x+wall.width
  wallLeftEdge=wall.x;
if (bulletRightEdge>=wallLeftEdge) {
  return true
}
else{
return false;
}
 }

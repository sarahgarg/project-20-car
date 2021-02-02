

var speed,weight,thickness;
var wall,bullet;
function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
 speed=random(223,321);
 weight=random(30,52);
  wall= createSprite(800, 200,thickness, height/2);
 bullet = createSprite(50,200,80,40);
 wall.shapeColor=color(80,80,80);
 
 
}

function draw()
 {
  background("black");
  bullet.velocityX=speed;
 
  
   if (istouching(bullet,wall))
   {
    bullet.velocityX=0;
    var damage =0.5*weight*speed*speed/(thickness*thickness*thickness);
   if(damage>10)
   {
     wall.shapeColor=color(255,0,0);
   }
    if (damage<10)
   {
     wall.shapeColor=color(0,255,0);
   }
   }
 
  drawSprites();
}
function istouching(bullet,wall)
{
bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true;

}
else
return false;
}
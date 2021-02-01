

var speed,weight;
var wall,car;
function setup() {
  createCanvas(1600,400);
  wall= createSprite(800, 200, 40, height/2);
 car = createSprite(50,200,50,50);
 wall.shapeColor=color(80,80,80);
 
 
 speed=random(55,90);
 weight=random(400,1500);
}

function draw() {
  background("black");
  car.velocityX=speed;
 if (wall.x-car.x < car.width/2+wall.width/2)
 {
  var deformation=0.5*weight*speed*speed/22500;
   car.velocityX=0;
   if(deformation<100)
   {
car.shapecolor=color(0,255,0);
   }
   else if (deformation>=100 && deformation>=180)
   {
     car.shapeColor=color(230,230,0);
   }
   else
   {
     car.shapeColor=color(255,0,0)
   }
 }
  drawSprites();
}
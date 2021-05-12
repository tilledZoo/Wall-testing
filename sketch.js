
var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(180,321);
  weight=random(20,52);
  thickness=random(27,83);
  bullet=createSprite(50,200,30,10); 
  bullet.velocityX=speed;
}
function draw() {
  background(0,0,0);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapecolor=color(80,80,80); 
  if (wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/22509;
    if(damage>10){
       wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}
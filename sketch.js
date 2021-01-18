var bullet,wall;
var speed, weight, thickness;

function setup() {

  createCanvas(1600,400);

  speed=random(1,5)
  weight=random(30,52)
  thickness=random(22,83)

  bullet=createSprite(50,200,50,5);
  bullet.velocityX = speed;
  bullet.shapeColor=color(255);

  wall=createSprite(800,200,thickness,height/2);
  wall.shapeColor=color(230,230,230);

}

function draw() {
  background(0);

if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5*speed*speed/(thickness*thickness*thickness);

  if(damage>10)
  {
    wall.shapeColor="red"
  }

  if (damage<10)
  {
    wall.shapeColor="green"
  }
}
drawSprites();
  }

  function hasCollided(lbullet, lwall)
{
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge= lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false
}
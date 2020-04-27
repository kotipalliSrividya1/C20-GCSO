
var car,ground,weight, speed;
function setup() {
  createCanvas(1200,400);
  car=createSprite(100,100,30,30);
  ground=createSprite(1200,200,60,400);
  ground.shapeColor=color(80,80,80);
  weight=random(400,1500);
  speed=random(5,10);
  car.velocityX=speed;
}
function draw() {
  background("blue");  
  isTounching(ground,car);
  drawSprites();
}
function deformation(){
 var deform=0.5*(weight*speed*speed)/22500;

 if(deform>180){
  textSize(20);
  text("LETHAL",600,200);
  car.shapeColor=color(255,0,0);
 }
 if(deform<180 && deform>80){
  textSize(20);
  text("Average",600,200);
  car.shapeColor=color(230,230,0);
 }
 if(deform<80){
  textSize(20);
  text("Good",600,200);
  car.shapeColor=color(0,255,0);
 }
}
function isTounching(ground,car){
  if(ground.x-car.x<ground.width/2+car.width/2){
    car.velocityX=0;
    deformation();
  }
}

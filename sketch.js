var track,carImg,obstacleImg;
var bgImg,car,obstacle,obstacleGroup;
var gameState="play";
var finish=false;

function preload() {

  //preloading images

 track=loadImage("images/track.jpg");
 obstacleImg=loadImage("images/stone.png");
 carImg=loadImage("images/racing car.png");
  
}

function setup() {
  createCanvas(displayWidth-20,displayHeight-30);

  //creating sprites

  obstacleGroup= new Group();

 car=createSprite(displayWidth-20/2,displayHeight-30/2,50,50);
 car.addImage(carImg);
 car.setCollider("rectangle",0,100,250,250);

 // console.log(displayHeight)
 }

function draw() {
 background(rgb(198,135,103));
 image(track, 550,-displayHeight*4,displayWidth, displayHeight*5);

 //making car move with arrow keys
if(gameState==="play"){
 if(keyDown(LEFT_ARROW)){
    car.x=car.x-10;
 }
if(keyDown(RIGHT_ARROW)){
  car.x=car.x+10;
}
if(keyDown(UP_ARROW)){
  car.y=car.y-10;
}


if(frameCount%200==0){ 
  obstacle=createSprite(random(800,1300),camera.position.y-250,30,30);
  obstacle.addImage(obstacleImg); 
  obstacleGroup.add(obstacle); 
} 

//if the car hits the obstacle game is over  
if(car.isTouching(obstacleGroup)){
  gameState="end";
   
  }


  //setting camera directions
camera.position.x = displayWidth-20/2;
camera.position.y = car.y;

if(car.y<=-3050){
   finish=true;
   gameState="end";
}
}

if(gameState==="end"){
 car.destroy(); 
 obstacleGroup.destroyEach(); 
 background("black");
 textSize(40);
 fill("black")
 stroke("white");
 strokeWeight(4);
 
if(finish==true){
  //background("black"); 
 
  text("YOU WIN",displayWidth,camera.position.y); 
}
else{
  text("GAMEOVER!!!!",displayWidth-20/2,camera.position.y);
}
}

drawSprites();
}
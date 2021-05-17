var wheel_img,knife_img,fruit1_img;
var wheel,knife,fruit1;
function preload() {

 
  wheel_img=loadImage("images/wheel.png");
  knife_img=loadImage("images/sword.png");
  fruit1_img=loadImage("images/apple.png");
}

function setup() {

  createCanvas(700,700);
wheel=createSprite(300,300);
wheel.scale=1.3;
wheel.addImage(wheel_img);
//wheel.rotation=270;
//wheel.debug=false;
//wheel.setCollider("circle",0,0,105);
  
knife=createSprite(300,650);
knife.addImage(knife_img);
knife.rotation=-45;
 
fruit1=createSprite(startx,starty);
fruit1.addImage(fruit1_img);
fruit1.scale=0.3;
 }

function draw() {
 background(rgb(38,0,73));
 
   
  //  wheel.rotation=wheel.rotation+10;

    //if(keyDown("up")){
     // knife.velocityY=-5;
    //}
  

 drawSprites();
}

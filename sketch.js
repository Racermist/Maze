var steffei,steffeiStandImg,RunLeftAnim,RunRightAnim;
var hut,hutImg;
var b1,b2,b3,b4,b5,b6,b7;
var v1,v2,v3,v4;
var oldLady,oldLady_img;


function preload(){
  steffeiStandImg=loadAnimation("./assets/s1.png")
  RunRightAnim=loadAnimation("./assets/s1.png","./assets/s2.png","./assets/s3.png","./assets/s4.png","./assets/s5.png","./assets/s6.png","./assets/s7.png","./assets/s8.png","./assets/s9.png","./assets/s10.png");
  RunLeftAnim=loadAnimation("./assets/s11.png","./assets/s12.png","./assets/s13.png","./assets/s14.png","./assets/s15.png","./assets/s16.png","./assets/s17.png","./assets/s18.png","./assets/s19.png","./assets/s20.png");
  hutImg=loadImage("./assets/hut.png");
  oldLady_img=loadImage("./assets/oldLady.png")


}
function setup(){
  createCanvas(1000,800)
  steffei=createSprite(50,730,10,10);
  steffei.addAnimation("standing",steffeiStandImg);
  steffei.addAnimation("runningLeft",RunLeftAnim);
  steffei.addAnimation("runningRight",RunRightAnim)
  steffei.scale=0.7;

  hut=createSprite(150,120,10,10);
  hut.addImage(hutImg);
  hut.scale=0.5;

  oldLady=createSprite(350,120,10,10);
  oldLady.addImage(oldLady_img);
  oldLady.scale=0.5



  b1=createSprite(1000,210,1000,20);
  b2=createSprite(350,600,1000,20);
  b3=createSprite(300,410,1000,20);
  b4=createSprite(1000,720,1000,20);
  b5=createSprite(500,500,800,20);
  b6=createSprite(500,300,500,20);
  b7=createSprite(1000,100,500,20)

  v1=createSprite(600,550,20,100);
  v2=createSprite(350,450,20,100);
  v3=createSprite(600,250,20,100);
  v4=createSprite(750,140,20,120);


  
  



}
function draw(){
  background(rgb(125,251,1))
  

  if(keyIsDown(LEFT_ARROW)){
    steffei.changeAnimation("runningLeft",RunLeftAnim)
    steffei.scale=0.7
    steffei.x=steffei.x-4;
  }
  if(keyIsDown(RIGHT_ARROW)){
    steffei.x=steffei.x+4;
    steffei.changeAnimation("runningRight",RunRightAnim)
    steffei.scale=0.7
  }
  if(keyIsDown(UP_ARROW)){
    steffei.y=steffei.y-4;
  }
  if(keyIsDown(DOWN_ARROW)){
    steffei.y=steffei.y+4;
  }
  

  drawSprites();
}
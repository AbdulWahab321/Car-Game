var car,carImg;
var PLAY=1;
var END=0;
var START=3;
var gameState=PLAY;
var distance,input,form,title,buttun,car1,car,rty;
var score=0
var SELECTOR=2
function preload(){
carImg=loadImage("Formula.png")
bg=loadImage("roadnew.png")
carIm31=loadImage("car5.png")
carIm3=loadImage("car1.png")
song=loadSound("sonicastronomia.mp3")
spec=loadSound("spectre.mp3")
alo=loadSound("alone.mp3")
dar=loadSound("dark.mp3")
Over=loadImage("over.png")
overSnd=loadSound("over.wav")
}
function setup(){
  createCanvas(600, 500);
  database = firebase.database();
  gameState=START
  player=new Player()
  form=new Form()
  form.display();
  
  background1 = createSprite(455,230,600,600);
  background1.addImage(bg);
  background1.scale = 2
  background1.velocityX+-5
  
 car= createSprite(90,150,20,20)
 car.addImage(carImg); 
 car.scale=0.6
 car.debug=true
  
  missileGr=new Group();
  invaderGr=new Group();
  invader1GR=new Group();
  missile1Gr=new Group();
  
  
}
function draw(){
  background(bg)
  if(frameCount%150===0){
    spawnObstacles();
    spawnObstacles1()
  }
  if(gameState===END){
    car.addImage(Over);
    car.scale=0.8;
    background1.velocityX=0;
    dar.stop();
    song.stop();
    alo.stop();
    spec.stop()
    
    car.setCollider("rectangle",0,1000,-5,-5);
    car.x=200;
    car.y=200;
    car.visible=true
    car1.visible=false;
    car2.visible=false;

    textSize(30)
    fill("white")
    
    spec.stop();
    alo.stop();
    
  

    
  }
  




  if(keyDown("up")){
    car.velocityY=-6
  
  }
  if (keyWentUp("up")) {
    car.velocityY=0
  }
  if(keyDown("down")){
    car.velocityY=6
  
  }
  if (keyWentUp("down")) {
    car.velocityY=0
  }
  if(keyDown("right")){
    background1.velocityX+-5
  }
  if (background1.x <0){
    background1.x = background1.width*1;
  }
  if(gameState===3){
 
    car.visible=false
    background1.visible=false
}
if(gameState===PLAY){
car.addImage(carImg)
car.y=World.mouseY
if(car.isTouching(invaderGr)){
  gameState=END;
  overSnd.play();
}
car.setCollider("rectangle",0,0,250,90);
car.visible=true
background1.visible=true
if(frameCount%50===0){


}
 






if(frameCount%50===0){
background1.velocityX+=-5
score+=100
invaderGr.velocityX+=-10;
}

player.getDistance();

player.update();



input.hide();
buttun.hide();
title.hide();
}

//player.getName();
if(gameState===SELECTOR){
  music1=createSprite(150,300,230,40);
  music1.shapeColor="white";
  music2=createSprite(350,300,200,40);
  music2.shapeColor="white";
  music3=createSprite(150,350,200,40);
  darks=createSprite(200,400,200,40)
  nomusic=createSprite(325,355,200,40)
  music3.shapeColor="white";
  darks.shapeColor="white";
  car.visible=false;
  music1.visible=false;
  music2.visible=false;
  music3.visible=false;
  nomusic.visible=false;
  darks.visible=false;
  textSize(40)
  input.hide();
buttun.hide();
title.hide();


 


  textSize(30)
  fill("white")
  text("(ASTRONOMIA)",music1.x-110,music1.y+10);
  text("(SPECTRE)",music2.x-60,music2.y+10);
  text("(ALONE)",music3.x-50,music3.y+10);
  text("(NONE)",nomusic.x-10,nomusic.y+5)
  text("(DARKSIDE)",darks.x-75,darks.y+5)
  stroke("white");
  textSize(30)
  stroke("white")
  strokeWeight(2)
  text("Press which music you need",100,100)
  if(frameCount%1===0){
  if(mousePressedOver(music1)){
    
    song.play();
    
    gameState=PLAY;
  
  }
}

if(frameCount%1===0){
  if(mousePressedOver(music2)){
    
    spec.play();
    gameState=PLAY;
  
  }
}


if(frameCount%1===0){
  if(mousePressedOver(music3)){
    
    alo.play();
    gameState=PLAY;
  
  }
}
if(frameCount%1===0){
  if(mousePressedOver(darks)){
    
    dar.play();
    gameState=PLAY;
  
  }
}

if(frameCount%1===0){
  if(mousePressedOver(nomusic)){
    gameState=PLAY;
  
  }
}
  
}





 

  
  



  drawSprites();
  fill("white")
textSize(20)
text("Score:"+score+"m",20,50)
}
function spawnObstacles(){
  
    car1 = createSprite(700,Math.round(random(50,450)));
    car1.velocityX = -6
    car1.scale=0.5
    car1.addImage(carIm3)
    invaderGr.add(car1)   



      
   
    
    
  }
  function spawnObstacles1(){
  
    car2 = createSprite(700,Math.round(random(50,450)));
    car2.velocityX = -6
    car2.scale=0.5
    car2.addImage(carIm31)
    invaderGr.add(car2)
  



      
   
    
    
  }
 function text(){
   text("NEXT>>",200,100)

  }
var PLAY =1;
var END = 0;
var gameState = PLAY;

var monkey , monkey_running; 
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var ground;

var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(50, 315, 20, 20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  //console.log(ground.x);
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
  
  
}


function draw() {
  background("white");
  
  survivalTime = Math.ceil(frameCount/getFrameRate());
  text("Survival Time : " + survivalTime, 100, 50);
  
  
  if (gameState === PLAY){

    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
    if(keyDown("space")&& monkey.y > 310) {
       
      monkey.velocityY = -12;
      
    }
    
    monkey.velocityY = monkey.velocityY + 0.8;
    
    createBanana();
    createObstacle();
    
  }else if (gameState === END ){
    
    
    
  }
  
    monkey.collide(ground);
  
  drawSprites();
  
}

function createBanana(){
  
  if (frameCount % 80 === 0){
    
    banana = createSprite(400, Math.round(random(220, 300)), 10, 10);
    banana.addImage(bananaImage);
    banana.velocityX = -4;
    banana.scale = 0.1;
    banana.lifetime = 100;
    
    //console.log(banana.y)
    
    bananaGroup.add(banana);
    
  }
  
}

function createObstacle(){
  

  if (frameCount % 300 === 0){
  
  obstacle = createSprite(350, 325, 10, 10);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX = -4;
  obstacle.scale = 0.1;
  obstacle.lifetime = 100;

  
  obstacleGroup.add(obstacle);
    
  }
  
}




const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
const Constraint = Matter.Constraint

var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var count = 3;
var gameState1 = "play";



function preload(){
   bg = loadImage("background.jpg");
   pin = loadImage("bowlingPin.png");
   alley = loadImage("bowlingAlley.jpg");
}

function setup(){
  engine = Engine.create();
  world = engine.world;
  
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  pin = new Pin(displayWidth/2+50,displayHeight/2+170,50);
  pin2 = new Pin(displayWidth/2+60,displayHeight/2+165,50);
  pin3 = new Pin(displayWidth/2+70,displayHeight/2+160,50);
  pin4 = new Pin(displayWidth/2+80,displayHeight/2+155,50);
  pin5 = new Pin(displayWidth/2+40,displayHeight/2+165,50);
  pin6 = new Pin(displayWidth/2+30,displayHeight/2+160,50);
  pin7 = new Pin(displayWidth/2+20,displayHeight/2+155,50);
  //pin8 = new Pin(displayWidth/2+30,displayHeight/2+155,50);

  pin9 = new Pin(displayWidth/2-100,displayHeight/2+170,50);
  pin10 = new Pin(displayWidth/2-110,displayHeight/2+165,50);
  pin11 = new Pin(displayWidth/2-120,displayHeight/2+160,50);
  pin12 = new Pin(displayWidth/2-130,displayHeight/2+155,50);
  pin13 = new Pin(displayWidth/2-90,displayHeight/2+165,50);
  pin14 = new Pin(displayWidth/2-80,displayHeight/2+160,50);
  pin15 = new Pin(displayWidth/2-70,displayHeight/2+155,50);
  
  pin16 = new Pin(displayWidth/2-300,displayHeight/2+170,50);
  pin17 = new Pin(displayWidth/2-285,displayHeight/2+169,50);
  pin18 = new Pin(displayWidth/2-275,displayHeight/2+168,50);
  pin19 = new Pin(displayWidth/2-262,displayHeight/2+167,50);
  pin20 = new Pin(displayWidth/2-243,displayHeight/2+166,50);

  pin21 = new Pin(displayWidth/2+230,displayHeight/2+170,50);
  pin22 = new Pin(displayWidth/2+220,displayHeight/2+169,50);
  pin23 = new Pin(displayWidth/2+210,displayHeight/2+168,50);
  pin24 = new Pin(displayWidth/2+200,displayHeight/2+167,50);
  pin25 = new Pin(displayWidth/2+240,displayHeight/2+169,50);
  pin26 = new Pin(displayWidth/2+250,displayHeight/2+168,50);

  //ground1 = new Ground(displayWidth/2+50,displayHeight/2+197);
  //ground2 = new Ground(displayWidth/2+60,displayHeight/2+192);
  //ground3 = new Ground(displayWidth/2+70,displayHeight/2+187);
  //ground4 = new Ground(displayWidth/2+80,displayHeight/2+182);
  //ground5 = new Ground(displayWidth/2+40,displayHeight/2+192);
  //ground6 = new Ground(displayWidth/2+30,displayHeight/2+187);
  //ground7 = new Ground(displayWidth/2+20,displayHeight/2+182);
  ball = new Ball(displayWidth/2+50,displayHeight/2+400,50)
  //ground = new Ground(displayWidth/2+50,displayHeight/2+410)
  attach = new Attach(ball.body,{x:displayWidth/2+50,y:displayHeight/2+270});


  

  game.getState();
  game.start();
}


function draw(){
  Engine.update(engine);
 
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1 ){
    clear();
    //ground1.display();
    //ground2.display();
    //ground3.display();
    //ground4.display();
    //ground5.display();
    //ground6.display();
    //ground7.display();
    game.play();
    pin.display ();
    pin2.display();
    pin3.display();
    pin4.display();
    pin5.display();
    pin6.display();
    pin7.display();
    //pin8.display();
    ball.display();
    attach.display();

    pin9.display();
    pin10.display();
    pin11.display();
    pin12.display();
    pin13.display();
    pin14.display();
    pin15.display();

    pin16.display();
    pin17.display();
    pin18.display();
    pin19.display();

    pin21.display();
    pin22.display();
    pin23.display();
    pin24.display();
    pin25.display();
    pin26.display();

    detectCollision(ball,pin);
    detectCollision(ball,pin2);
    detectCollision(ball,pin3);
    detectCollision(ball,pin4);
    detectCollision(ball,pin5);
    detectCollision(ball,pin6);
    detectCollision(ball,pin7);
    //detectCollision(ball,pin8);
    detectCollision(ball,pin9);
    detectCollision(ball,pin10);
    detectCollision(ball,pin11);
    detectCollision(ball,pin12);
    detectCollision(ball,pin13);
    detectCollision(ball,pin14);
    detectCollision(ball,pin15);
    detectCollision(ball,pin16);
    detectCollision(ball,pin17);
    detectCollision(ball,pin18);
    detectCollision(ball,pin19);
    detectCollision(ball,pin20);
    detectCollision(ball,pin21);
    detectCollision(ball,pin22);
    detectCollision(ball,pin23);
    detectCollision(ball,pin24);
    detectCollision(ball,pin25);
    detectCollision(ball,pin26);

    ball.remove();
    gameEnded();

  }
 if (count==0){
   console.log("game ended")
 }
}
function mouseDragged(){
  
      Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
      //count++;
  
}


function mouseReleased(){ 
    attach.fly();
    //count++;
}

function detectCollision(ball,pin){
    ballPosition = ball.body.position;
    pinPosition = pin.body.position;
    
    var distance = dist(ballPosition.x,ballPosition.y,pinPosition.x,pinPosition.y);
    if(distance<=ball.r+pin.r){
      Matter.Body.setStatic(pin.body,false);
    }
}                                                                           

function keyPressed(){
  if(keyCode==32&&count>0){
    count--;
    window.confirm("Total chances : 3 \n You have "+count+" chances left");
    ball = new Ball(displayWidth/2+50,displayHeight/2+400,50)
    
    console.log(count)
  }
}

function gameEnded(){
  if(count == 0){
    window.confirm("GAME ENDED! Press OK to restart");
    player.updateCount(0);
    game.update(0);
    window.location.reload();
  }
}

var canvas;
var music;
var ball;
var block1,block2,block3,block4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(100,550,70,10);
    block1.shapeColor = "red";
    block2 = createSprite(250, 550,70,10);
    block2.shapeColor = "green";
    block3 = createSprite(400,550,70,10);
    block3.shapeColor = "yellow";
    block4 = createSprite(550,550,70,10);
    block4.shapeColor = "blue";



    //create box sprite and give velocity
    ball = createSprite(600,700,30,30);
    ball.shapeColor = "white";
    

}

function draw() {
    background(rgb(0,0,0));
    ball.velocityX = -4;
    //create edgeSprite
    //createEdgeSprite();
    //ball.bounceOffEdges();
    music.play();


    //add condition to check if box touching surface and make it box
   if(block1.isTouching(ball)){
       ball.shapeColor = "red";
       ball.velocityX = 0;
       music.stop();
   }
   if(block2.isTouching(ball)){
     ball.shapeColor = "green";
     ball.velocityX = 0;
     music.stop();
   } 
   if(block3.isTouching(ball)){
    ball.shapeColor = "yellow";
    ball.velocityX = 0;
    music.stop();
}
if(block4.isTouching(ball)){
    ball.shapeColor = "blue";
    ball.velocityX = 0;
    music.stop();
}



    drawSprites();
}

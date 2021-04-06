var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var backgroundSprite,backgroundImg;
var packageBody,ground;
var helicopter1IMG, helicopter1Sprite
var collidedSound,helicopterSound;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("m.box1.png");
    backgroundImg=loadImage("hb.png");
	collidedSound=loadSound("drop.mp3");
	helicopterSound=loadSound("h.mp3");
    helicopter1IMG=loadImage("helicopter.png")
}

function setup() {
	createCanvas(1000, 800);
	rectMode(CENTER);

	backgroundSprite = createSprite(550,370,10,10);
	backgroundSprite.addImage(backgroundImg);
	backgroundSprite.scale=1.5;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.7;

	helicopter1Sprite=createSprite(120, 100, 10,10);
	helicopter1Sprite.addImage(helicopterIMG);
	helicopter1Sprite.scale=0.2;
	helicopter1Sprite.velocityX = 5




	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 20 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
 
 
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
 Matter.Body.setStatic(packageBody,false);
 helicopterSprite.velocityX = 5
 collidedSound.play();
 helicopterSound.play();



    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    
  }
}




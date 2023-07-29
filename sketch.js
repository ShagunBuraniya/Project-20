var canvas,bgImg;
var together;
var cat,catImage1,catImage2,catImage3 ;
var mouse,mouseImage1,mouseImage2,mouseImage3;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png")
    catImage1 = loadAnimination("images/cat1.png")
    catImage2 = loadAnimination("images/cat2.png","images/cat3.png")
    catImage3 = loadAnimination("images/cat4.png")
    mouseImage1 = loadAnimination("images/mouse1.png")
    mouseImage2 = loadAnimination("images/mouse2.png","images/mouse3.png")
    mouseImage3 = loadAnimination("images/mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    
    cat = createSprite(870, 600);
    cat.addAnimination("catSitting", catImage1);
    cat.scale = 0.2

    mouse = createSprite(650,30);
	mouse.addImage("mouseStanding",mouseImage1);
	mouse.scale = 0.15;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimination("catLastImage",catImage3);
        cat.x = 300;
        cat.scale =0.2;
        cat.changeAnimaination("catLastImage");
        mouse.addAnimination("mouseLastImage",mouseImage3);
        mouse.scale = 0.15;
        mouse.changeAnimaination("mouseLastImage");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimination("catRunning",catImage2);
    cat.changeAnimaination("catRunning");

    mouse.addAnimination("mouseTeasing",mouseImage2);
    mouse.frameDelay = 25;
    mouse.changeAnimaination("mouseTeasing");
  }
}

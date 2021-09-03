var hockey,hockeyimg;
var line,line1,line2,line3,line2,line5,line6;
var stricker , strickerimg;
function preload(){
  hockeyimg = loadImage("images.jpg");
  strickerimg = loadImage("stricker.png")
  }



  function setup(){ 
  createCanvas(570,850);
 
  hockey = createSprite(285,420);
  hockey.addImage(hockeyimg)
  hockey.scale = 3.1
  hockey.rotate

  line = createSprite(280,420,550,10)
  line.visible = true;

  line1 = createSprite(20,420,8,820)
  line1.visible = true;

  line3 = createSprite(560,420,8,820)
  line3.visible = true;

  line4 = createSprite(100,10,200,10) 
  line4.visible = true; 

  line2 = createSprite(470,10,200,10)
  line2.visible = true;

  line5 = createSprite(100,835,200,10)
  line5.visible = true;
  
  line6 = createSprite(470,835,200,10)

  stricker = createSprite(285,415,20,20)
  stricker.addImage(strickerimg)
  stricker.scale = 0.3
  //stricker.y = World.mouseY
  stricker.velocityX = -8
  stricker.velocityY = 8


  

}
    



function draw() {
  background(0);
  drawSprites();
  
    stricker.bounceOff(line1)
    stricker.bounceOff(line2)
    stricker.bounceOff(line3)
    stricker.bounceOff(line4)
    stricker.bounceOff(line5)
    stricker.bounceOff(line6)
}





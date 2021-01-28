var fixedRECT
var movingRECT

function setup() {
  createCanvas(800,400);

fixedRECT = createSprite(200,200,50,80);
fixedRECT.shapeColor = "blue"
movingRECT = createSprite(600,200,80,30);
movingRECT.shapeColor = "blue"


}


function draw() {
  background("white");
movingRECT.x = mouseX;  
 movingRECT.y = mouseY; 

 if(movingRECT.x-fixedRECT.x < movingRECT.width/2 + fixedRECT.width/2
  && fixedRECT.x-movingRECT.x < fixedRECT.width/2 + movingRECT.width/2
  && movingRECT.y-fixedRECT.y < movingRECT.height/2 + fixedRECT.height/2
  && fixedRECT.y-movingRECT.y < fixedRECT.height/2 + movingRECT.height/2 ){
movingRECT.shapeColor = "red"
fixedRECT.shapeColor = "red"
 }

 else{
movingRECT.shapeColor = "blue"
fixedRECT.shapeColor = "blue"
 }
  drawSprites();

}
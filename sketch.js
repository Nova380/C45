
function setup() {
  createCanvas(windowWidth-20,windowHeight-20);
Lbutton=createButton("⬅");
Rbutton=createButton("----ᐳ");
Lbutton.position(windowWidth/20,windowHeight*7/8);
Rbutton.position(windowWidth*9/10,windowHeight*7/8);
Bot=createSprite(windowWidth/2,windowHeight*6/7);
edges=createEdgeSprites();
}

function draw() {
  background(255);  
 Lbutton.mousePressed(()=>{
   Bot.setVelocity(-3,-3);
 })
Rbutton.mousePressed(()=>{
  Bot.setVelocity(3,-3);
})
Bot.velocityX+=0.5;
Bot.velocityY+=0.5;
spawnBenches();
spawnDbenches();
Bot.collide(edges);
drawSprites();
}
function spawnBenches() {
  if(World.frameCount % 180 === 0) {
    var r=Math.round(random(50,windowWidth-50))
    var obstacle = createSprite(r,0,150,50);
    obstacle.shapeColor='green'
    obstacle.velocityY = 2
    //var rand = randomNumber(1,6);
  
   // ObstaclesGroup.add(obstacle);
  }
}
function spawnDbenches() {
  if(World.frameCount % 180 === 0) {
    var r=Math.round(random(50,windowWidth-50))
    var obstacle2 = createSprite(r,0,150,50);
    obstacle.shapeColor="red"
    obstacle2.velocityY = 2
    
    //var rand = randomNumber(1,6)
    //ObstaclesGroup2.add(obstacle2);
  }
}

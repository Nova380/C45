var name="kauSTUbH"
console.log(name);
var n = 50;
console.log(n);
var B = true;
console.log(B);
var abc;
console.log(abc);
abc=null;
console.log(abc);
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
var a = 5/3;
console.log(a);
var x = 5%3;
parseInt("a");
console.log(a)
console.log(namename);
function setup() {
  createCanvas(1600,400);

/*  fixrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(400,200,50,50);
  rect1 = createSprite(100,100,50,50);
  rect2 = createSprite(600,100,50,50);
  rect3 = createSprite(200,100,50,50);
  rect2.velocityX=-5;
  rect3.velocityX=5;
  rect2.shapeColor = "yellow";
  rect3.shapeColor = "orange";*/
}

function draw() {
  background(0,0,0);  
  /*movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if(istouching(rect1,movingrect)){
    rect1.shapeColor="violet";
    movingrect.shapeColor="violet";
  }
  else{
    rect1.shapeColor="green";
  movingrect.shapeColor="green"; 
  }
  bounceOff(rect2,rect3);
  drawSprites();*/
  for(var i =0;i<40;i++){
if(i%2===0){
  text(i,200,i*20-15)
}
else{
  text(i,100,i*20+4)
}
  }

for(var i = 21;i<40;i++){
  if(i%2===0){
    text(i,300,i/2)
  }
  else{
    text(i,400,i/2)
  }
}
}
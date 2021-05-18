//Create variables here
var dog,happydog,database,foodStock,foodS,saddog;





function preload()
{
	//load images here
  happydog=loadImage("IMAGES/dogImg.png");
  saddog=loadImage("IMAGES/dogImg1.png");
}

function setup() {
	createCanvas(800, 700);
  database=firebase.database();
  dog=createSprite(400,500);
  dog.addImage(saddog);
dog.scale=0.5;
  foodStock=database.ref("food");
  foodStock.on("value",readStock);
}

function draw() {  
  background("lightgreen");
if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happydog);
}

  drawSprites();

}
function readStock(data){
foodS=data.val();
}

function writeStock(x){

if(x<=0){
x=0;
}else{
  x=x-1;
}
database.ref('/').update({food:x})
}














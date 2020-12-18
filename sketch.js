var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var Bg
var form, player, game;
var playfield1
var office, messhall, start, hallway, gym, bedroom
var player, impostor
var Bg

function preload(){
 bg1 = loadAnimation("BG Start/1.jpg", "BG Start/2.jpg" , "BG Start/3.jpg" , "BG Start/4.jpg" , "BG Start/5.jpg" , "BG Start/6.jpg" , "BG Start/7.jpg" , "BG Start/8.jpg" , "BG Start/9.jpg","BG Start/11.jpg", "BG Start/12.jpg", "BG Start/13.jpg", "BG Start/14.jpg", "BG Start/15.jpg", "BG Start/16.jpg", "BG Start/17.jpg", "BG Start/18.jpg", "BG Start/19.jpg","BG Start/21.jpg", "BG Start/22.jpg", "BG Start/23.jpg", "BG Start/24.jpg", "BG Start/25.jpg", "BG Start/26.jpg", "BG Start/27.jpg", "BG Start/28.jpg", "BG Start/29.jpg","BG Start/31.jpg", "BG Start/32.jpg", "BG Start/33.jpg", "BG Start/34.jpg", "BG Start/35.jpg", "BG Start/36.jpg", "BG Start/37.jpg", "BG Start/38.jpg", "BG Start/39.jpg", "BG Start/41.jpg", "BG Start/42.jpg", "BG Start/43.jpg", "BG Start/44.jpg", "BG Start/45.jpg", "BG Start/46.jpg", "BG Start/47.jpg", "BG Start/48.jpg", "BG Start/49.jpg", "BG Start/51.jpg", "BG Start/52.jpg", "BG Start/53.jpg", "BG Start/54.jpg", "BG Start/55.jpg", "BG Start/56.jpg", "BG Start/57.jpg", "BG Start/58.jpg", "BG Start/59.jpg", "BG Start/61.jpg", "BG Start/62.jpg", "BG Start/63.jpg", "BG Start/64.jpg", "BG Start/65.jpg", "BG Start/66.jpg", "BG Start/67.jpg", "BG Start/68.jpg", "BG Start/69.jpg", "BG Start/71.jpg", "BG Start/72.jpg", "BG Start/73.jpg", "BG Start/74.jpg", "BG Start/75.jpg", "BG Start/76.jpg", "BG Start/77.jpg", "BG Start/78.jpg", "BG Start/79.jpg", "BG Start/81.jpg", "BG Start/82.jpg", "BG Start/83.jpg", "BG Start/84.jpg", "BG Start/85.jpg", "BG Start/86.jpg", "BG Start/87.jpg", "BG Start/88.jpg", "BG Start/89.jpg","BG Start/91.jpg", "BG Start/92.jpg", "BG Start/93.jpg", "BG Start/94.jpg", "BG Start/95.jpg", "BG Start/96.jpg", "BG Start/97.jpg", "BG Start/98.jpg", "BG Start/99.jpg", "BG Start/100.jpg")
 map = loadImage("a.jpg")
 playfield = loadImage("a2.jpg")
}
function setup(){
  //canvas = createCanvas(displayWidth - 15, displayHeight-220);
  canvas = createCanvas(windowWidth, windowHeight-20);
    game = new Game()
    game.start()
    Bg = createSprite(displayWidth/2,displayHeight/2)
    Bg.addAnimation("bgStart", bg1)
    Bg.scale = 1.5
    Bg.visible = true
  player = createSprite(1400,600,10,10)
  player.shapeColor = "orange"
    player.visible = false



  
 
    /*green = createSprite(300,200);
   green.shapeColor = "green"
    

    red = createSprite(700,200);
    red.shapeColor = "red"
   
    orange = createSprite(700,200);
    orange.shapeColor = "orange"
   
    characters = [blue, green, red, orange];
  */
 
}


function draw(){
if (gameState === 0){
  
  drawSprites();
  }
  if(gameState === 1){
    clear();
    background("black")
    fill("white")
    textSize(50)
    text("Detective", width/2 - 80, height/5)
    game.Start()
    
   
  }
  if(gameState === 2){
  Bg.visible = false
    form.hide()
    image(playfield, displayWidth/2, displayHeight/2)
 //playfield1 = createSprite(width/2, height/2)
  //playfield1.addImage("Play", playfield)
  player.visible = true
  playerControls()
  walls();
  drawSprites()
  text(mouseX + "," + mouseY, mouseX, mouseY);
 
  }
}
function playerControls(){
if(keyDown("RIGHT_ARROW")){
  player.x = player.x + 3
}
if(keyDown("LEFT_ARROW")){
  player.x = player.x - 3
}
if(keyDown("DOWN_ARROW")){
  player.y = player.y + 3
}
if(keyDown("UP_ARROW")){
  player.y = player.y - 3
  }
}
function walls(){
  gym = createSprite(365,0,20, 385)
  var gym2 = createSprite(365,500,20, 485)
  gym.shapeColor = "black"
  gym2.shapeColor = "black"
  hallway = createSprite(1046,0,50, 605)
  var hallway2 = createSprite(1035,595, 20, 485)
  hallway.shapeColor = "black"
  hallway2.shapeColor = "black"
  wall1 = createSprite(700,0,650,20)
  wall2 = createSprite(785,675,1400,20)
  wall3 = createSprite(225,190,265,20)
  wall4 = createSprite(100,435,20,475)
  wall5 = createSprite(1500,400,20,650)
  wall6 = createSprite(1220,446,400,30)
  wall6 = createSprite(1220,290,400,30)
  wall7 = createSprite(1290,135,25,252)
  player.bounce(hallway)
}

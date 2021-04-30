const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var boardImage,blueImage,blue1;

function preload(){
    boardImage=loadImage("images/background.png");
}

function setup(){
    engine=Engine.create();
    world=engine.world
    createCanvas(600,725)

    blue1=new Piece(20,570,40,40);
}

function draw(){
    Engine.update(engine);
    background(255);
    image(boardImage,0,0,600,600);
    blue1.display();    
}
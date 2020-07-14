var database;
var canvas;
var gameState = 0;
var playerCount,form,player,game;
var allPlayers;
function setup(){
    database = firebase.database();

   canvas =  createCanvas(500,500);

   game = new Game();
   game.getState();
   game.start();
}

function draw(){
    background("white");

    drawSprites();
}



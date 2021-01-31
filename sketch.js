var canvas;
var gameState=0;
var constestantCount;
var database;
var quiz;
var question;
var contestant;
var allPlayers;

function setup(){
  canvas = createCanvas(850,400);
  database=firebase.database();
  quiz=new Quiz();
  quiz.getStart();
  quiz.start();
  // quiz.start();
}


function draw(){
  background("pink");

  
}

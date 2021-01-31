class Quiz{
    constructor(){

    }
    getStart(){
        var gameStateRef=database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState=data.val();
        })
    }
    update(state){
        database.ref("/").update({
            gameState:state
        })
    }
    start(){
        if(gameState===0){
            contestant=new Contestant();
            contestant.getCount();
            question=new Question();
            question.display(); 

        }
    }
    play(){
        question.hide();
        textSize(30);
        text("Result",120,100);
        contestant.getPlayerInfo();
        if(allPlayers!==undefined){
          var display_position=130;
          for(var plr in allPlayers){
            if(plr==="player"+player.index)
              fill("green");
              else{
                fill("black");
              }
              display_position+=20;
              textSize(15);
              text(allPlayers[plr].name+": "+allPlayers[plr].distance,120,display_position);
    
          }
    }    }
}
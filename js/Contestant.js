class Contestant {
    constructor(){
      this.index=null;
    //   this.distance=0;
      this.name=null;
      this.answer=null;
    }
  
    getCount(){
      var playerCountRef = database.ref('contestantCount');
      playerCountRef.on("value",function(data){
        constestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        constestantCount: count
      });
    }
  
    update(){
      var contestantIndex = "contestants/Person" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        answer:this.answer
      });
    }
    static getPlayerInfo(){
      var playersInfoRef=database.ref("contestants");
      playersInfoRef.on("value",(data)=>{
        allPeople=data.val();
      });
    //   console.log(allPlayers);
    }
  }
  
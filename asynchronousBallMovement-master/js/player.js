class Player {
    constructor(){
        this.name ;
    this.distance ;
    this.index
    }

    getCount(){
        var playerCountref = database.ref('playerCount');
        playerCountref.on("value",function(data){
            playerCount= data.val();
        })
    }
    updateCount(count){
database.ref("/").update({
    playerCount: count 
})
    }
    update(name){
var playerIndex = "players/player"+this.index;
database.ref(playerIndex).set({
    name: this.name,
    distance : this.distance 
    
});

    }
 static  getPlayerInfo(){
var playerInforef = database.ref("players");
playerInforef.on("value",(data) =>{
    allPlayers = data.val()
});
    }
}
class Game {
constructor(){}
getState(){
    var gameStateref = database.ref ('gameState');
    gameStateref.on("value",function(data){
        gameState = data.val();
    });

}

update (state){
    database.ref('ball/position').set({
        gameState: state

    });
}

start (){
    if (gameState === 0){
        player= new Player();
        player.getCount();
        form = new Form ();
        form.display();
    }
}
play (){
    form.hide();
    textSize(30);
    text("game Start",120,100);
    Player.getPlayerInfo();
if (allPlayers !== undefined){
    var displayPosition = 130;
    for(var plr in allPlayers){
        if (plr === "player"+ player.index){
fill("red");
        }
        else{
            fill("black");
        }
        displayPosition = displayPosition+ 20;
        textSize(15);
        text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,displayPosition);
    }
}

if (keyIsDown(UP_ARROW)&& player.index!== null ){
player.distance = player.distance + 15;
player.update();
}
}
}
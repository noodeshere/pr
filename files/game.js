class Game{
    constructor(){

    }
 play(){
 background("white")
 image(trackima,0,-displayHeight*4,displayWidth,displayHeight*5)
     
form.greeting1.hide()
form.greeting2.hide()
player.getRank()
    player.getPlayerInfo() 
 if(allPlayers!==undefined){
     var index=0
     var x=300
     var y=0
if(keyDown(UP_ARROW)){
    player.distance=player.distance+10
    player.update()
}     
 var textPosition=150
 for(var plr in allPlayers){
     index=index+1
     x=x+250
     y=displayHeight-allPlayers[plr].distance
     cars[index-1].x=x
     cars[index-1].y=y
     textPosition=textPosition+20
     if(plr=="player"+player.index){
         fill("red")
         cars[index-1].shapeColor="red"
         camera.position.y=y
     ellipse(x,y,70,70)
        }
     else{
         fill("yellow")
     }
     text(allPlayers[plr].name+" : "+ allPlayers[plr].distance,100,y)
 }
 if(player.distance>5299){
   
    player.rank=player.rank+1
    player.updateRank(player.rank)
    text("rank: "+player.rank,width/2,y)
    gameState=2
  }
}
drawSprites()
}

    getState(){
database.ref('gameState')
.on("value",function(data){
gameState=data.val()
})
 }   
 updateState(x){
     database.ref('/')
     .update({
         gameState:x
     })
 }
}
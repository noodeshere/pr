class Player{
    constructor(){
this.index=null
this.name=null
this.distance=0
 this.rank=0   }
getCount(){
    database.ref('playerCount')
    .on("value",function(data){
    playerCount=data.val()
    })

}
getRank(){
    database.ref('rank').on("value",function(data){
    this.rank=data.val()
})
}
updateRank(x){
    database.ref('/')
    .update({
        rank:x
    })
}
updateCount(x){
    database.ref('/')
    .update({
        playerCount:x
    })
}
getPlayerInfo(){
    database.ref('players').on("value",function(data){
allPlayers=data.val()    
    })
}



update(){
    var path="players/player"+this.index
    database.ref(path).update({
        name:this.name,
        distance:this.distance
    })
}
}




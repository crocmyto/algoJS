class Pokemon {
    constructor(name,attack,defense,hp,luck){
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }
    IsLucky(){
        let rand = Math.random()
        rand = Math.floor(rand * 100)
        //console.log(rand)
        if (rand < this.luck){
            return true
        }else {
            return false
        }
    }
    attackPokemon(pokemon){
        let dmg = this.attack - pokemon.defense
        if (this.IsLucky()){
            if (dmg < 0) {
                pokemon.hp -= 0
            }else if (dmg>=0) {
                pokemon.hp -= dmg
            } 
        }else{
            //console.log("tu as ratée ton attaque")
        }
        //console.log("pv restant :"+pokemon.hp)
        //console.log("dégat infliger :"+dmg)
        if (this.hp <= 0){
            console.log("Ton pokemon est mort")
        }else if (pokemon.hp <= 0){
            console.log("Tu as tué son pokemon")
        }
    }
}
let Pokemon1 = new Pokemon("Pikachu",10,3,20,40)
let Pokemon2 = new Pokemon("Arceus",120,5,120,50)
while (Pokemon1.hp >= 0 && Pokemon2.hp >= 0){
    //console.log("pokemon1 hp : "+Pokemon1.hp)
    //console.log("pokemon2 hp : "+Pokemon2.hp)
    Pokemon1.attackPokemon(Pokemon2)
    Pokemon2.attackPokemon(Pokemon1)
}

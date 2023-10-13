/*class personnage {
    constructor(name,pv,musique,nbr,changement){
        this.name = name
        this.pv = pv
        this.musique = musique
        this.musique.push("Wejdene - Anissa")
        this.nbrFeurouge = nbr
        this.changement = changement
    }
    EndStat(){
        let musiqueActuelle = this.musique[Math.floor(Math.random() * this.musique.length)]
        console.log("Musique Jouée : "+musiqueActuelle)
        console.log("Nombre de feu Rouge restant : "+this.nbrFeurouge)
        //console.log("Musique : "+this.musique[4])  
        if (musiqueActuelle == this.musique[(this.musique.length-1)]){
            //console.log(this.musique)
            //console.log("pv avant : "+this.pv)
            this.pv -= 1
            this.changement += 1
            //console.log("pv restant : "+this.pv)
            //console.log("changement : "+this.changement)
        }else{
            this.nbrFeurouge -= 1
        }
        if (this.pv <= 0){
            console.log("Explosion")
        }
        if (this.nbrFeurouge <= 0){
            console.log("Vous êtes arriver à déstination")
            console.log("Il vous a fallu "+this.changement+" changement de taxi pour y arriver")
        }
    }
}

let Perso = new personnage("John",10,["Jazzy Bazz - Arkham Anthem","Eden Dillinger - Océan Rouge","Heylog - the widows home","9Tails - wtf im crying","Laylow - UNE HISTOIRE ETRANGE"],30,0)
while (Perso.pv > 0 && Perso.nbrFeurouge > 0 ){
    Perso.EndStat()
}*/
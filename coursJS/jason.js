class humain{
    constructor(ProbMourir,ProbDmg,ProbMortDmg){
        this.ProbMourir = ProbMourir
        this.ProbDmg = ProbDmg
        this.ProbMortDmg = ProbMortDmg
        this.name = ["nom1","nom2","nom3","nom4","nom5","nom6","nom7"]
        this.Cara = ["cara1","cara2","car3","cara4","cara5","cara6","cara7",]
        this.JasonPV = 100
        this.ListMort = []
    }
    CreateSurv(){
        //console.log("listname : "+this.name)
        this.name = this.name[Math.floor(Math.random() * this.name.length)]
        //console.log("this.name : "+this.name)
        this.Cara = this.Cara[Math.floor(Math.random() * this.Cara.length)]
    }
    DmgPhase(){
        this.CreateSurv()
        let rand = Math.random()
        if (rand <= this.ProbMourir){
            this.ListMort.push(this.name)
            console.log("Jason a tué "+this.name)
        }else if (this.ProbMourir < rand <= this.ProbDmg + this.ProbMourir){
            this.JasonPV -= 10
            console.log(this.name + " a esquivé et a infligé 10 dmg")
        }else if (this.ProbDmg + this.ProbMourir < rand <= this.ProbDmg + this.ProbMourir + this.ProbMortDmg){
            this.ListMort.push(this.name)
            this.JasonPV -= 15
            console.log(this.name + " est mort mais à infliger 15 dmg")
        }
    }
}
let survivants = [];
for (let i = 0; i < 5; i++) {
    let survivant = new humain(0.3,0.5,0.2)
    survivants.push(survivant);
}
console.log(survivants[0].name)
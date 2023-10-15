let Jason = {
    nom: 'Jason',
    pointsDeVie: 100
}

const GenNom = () => {
    const noms = ["Michel ","Waren ","Toméo ","Sardoche ","Jean-Eude ","Charles ","Ben Laden ","Fitipaldi ","Fangio ","Rodri "]
    return noms[Math.floor(Math.random() * noms.length)]
}

const GenCara = () => {
    const cara = ["Intello","Crack-Head","Dépressif","Trisomique","Paranoiaque","Schizophrene","Arabe","Pervers","Narcissique","Peureux"]
    return cara[Math.floor(Math.random() * cara.length)]
};


let survivants = [];
for (let i = 0; i < 5; i++) {
    let survivant = {
        nom: GenNom(),
        cara: GenCara(),
        enVie: true
    }
    survivants.push(survivant)
}
const attaquer = (attaquant, cible) => {
    let ProbMourir = 3
    let ProbDmg = 5
    //let ProbMortDmg = 2
    let rand = Math.floor(Math.random() * 11)
    if (rand <= ProbMourir) {
        cible.enVie = false;
        console.log(attaquant.nom + " a tué " + cible.nom + cible.cara);
    } else if (rand <= ProbDmg + ProbMourir) {
        attaquant.pointsDeVie -= 10;
        console.log(cible.nom + cible.cara + " a esquivé et a infligé 10 points de dégâts à " + attaquant.nom);
    } else if (rand <= 10) {
        cible.enVie = false;
        attaquant.pointsDeVie -= 15;
        console.log(cible.nom + cible.cara + " a infligé 15 points de dégâts à " + attaquant.nom + " mais est mort");
    }
}

while (Jason.pointsDeVie > 0 && survivants.some(s => s.enVie)) {
    let randomSurvivant = survivants.filter(s => s.enVie)[Math.floor(Math.random() * survivants.filter(s => s.enVie).length)]
    attaquer(Jason, randomSurvivant)
}
let ListMort = []
console.log("Morts : ")
survivants.filter(s => !s.enVie).forEach(mort => {
    console.log(mort.nom + mort.cara)
    ListMort.push(mort.nom + mort.cara)
})

if (Jason.pointsDeVie <= 0) {
    console.log("Les survivants ont gagné mais RIP à " + ListMort)
} else {
    console.log('Jason a tué tous les survivants. Les survivants ont perdu.')
}
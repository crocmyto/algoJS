let Jason = {
    nom: 'Jason',
    pointsDeVie: 100
}

const GenNom = () => {
    const noms = ["nom1","nom2","nom3","nom4","nom5","nom6","nom7"]
    return noms[Math.floor(Math.random() * noms.length)]
}

const GenCara = () => {
    const cara = ["cara1","cara2","car3","cara4","cara5","cara6","cara7",]
    return cara[Math.floor(Math.random() * cara.length)]
};


let survivants = [];
for (let i = 0; i < 5; i++) {
    let survivant = {
        nom: GenNom(),
        caracteristique: GenCara(),
        enVie: true
    }
    survivants.push(survivant)
}
const attaquer = (attaquant, cible) => {
    let ProbMourir = 0.3
    let ProbDmg = 0.5
    let ProbMortDmg = 0.2

    let rand = Math.random()
    if (rand < ProbMourir) {
        cible.enVie = false
        console.log(attaquant.nom + " a tué " + cible.nom)
    } else if (rand < ProbDmg) {
        attaquant.pointsDeVie -= 10;
        console.log(cible.nom + " a esquivé et a infligé 10 points de dégâts à " + attaquant.nom)
    } else if (rand < ProbMortDmg) {
        cible.enVie = false
        attaquant.pointsDeVie -= 15
        console.log(cible.nom + " a infligé 15 points de dégâts à " + attaquant.nom + " mais est mort")
    }
};

while (Jason.pointsDeVie > 0 && survivants.some(s => s.enVie)) {
    let randomSurvivant = survivants.filter(s => s.enVie)[Math.floor(Math.random() * survivants.filter(s => s.enVie).length)]
    attaquer(Jason, randomSurvivant)
}
let ListMort = []
console.log("Morts : ")
survivants.filter(s => !s.enVie).forEach(mort => {
    console.log(mort.nom)
    ListMort.push(mort.nom)
})

if (Jason.pointsDeVie <= 0) {
    console.log("Les survivants ont gagné mais RIP à " + ListMort)
} else {
    console.log('Jason a tué tous les survivants. Les survivants ont perdu.')
}
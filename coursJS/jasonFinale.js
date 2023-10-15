let Jason = { //Définie Jason qui est un dictionnaire avec un nom et des points de vie
    nom: 'Jason',//on initie le nom par Jason
    pointsDeVie: 100//on initie les Points de vie à 100
}

const GenNom = () => { //Permet de définire aléatoirement des noms
    const noms = ["Michel ","Waren ","Toméo ","Sardoche ","Jean-Eude ","Charles ","Ben Laden ","Fitipaldi ","Fangio ","Rodri "]//List des noms (10 noms)
    return noms[Math.floor(Math.random() * noms.length)]//fonction pour créer un nom aléatoire
}

const GenCara = () => {//Permet de définire aléatoirement des caractéristiques
    const cara = ["Intello","Crack-Head","Dépressif","Trisomique","Paranoiaque","Schizophrene","Arabe","Pervers","Narcissique","Peureux"]//Liste des caractéristiques (10 caractéristiques)
    return cara[Math.floor(Math.random() * cara.length)]//fonction pour créer une caractéristiques aléatoire
}


let survivants = []//liste vide qui vas acceuillire toute nos itérations de personnage
for (let i = 0; i < 5; i++) {//Boucle qui vaut 5 pour créer 5 survivant
    let survivant = {//Création de survivant qui est un dictionnaire avec un nom et un cara aléatoire utilisant les 2 variables définie plus tôt
        nom: GenNom(),//nom aléatoire
        cara: GenCara(),//cara aléatoire
        enVie: true//permet de vérifier plus tard si le personnage créer est en vie
    }
    survivants.push(survivant)//permet d'ajouter chaque nouveau survivant dans une liste
}
const attaquer = (attaquant, cible) => {//Fonction permettant de faire les actions d'attaque
    let ProbMourir = 3//probabilité de mourir d'une attaque de jason
    let ProbDmg = 5//probailité de faire des dégats à Jason et d'esquiver son attaque
    //let ProbMortDmg = 2 (on n'as pas besoin de cette stats car il faut que la somme des probabilité soit égal à 1 il nous suffit donc d'additionner les deux premiers proba et de les soustraire à 1
    let rand = Math.floor(Math.random() * 11)//permet de générer un nombre entier entre 0 et 10
    if (rand <= ProbMourir) {//vérifie si le nombre random est entre 0 et la chance de mourir
        cible.enVie = false//si la vérification est vrai alors le survivant est mort
        console.log(attaquant.nom + " a tué " + cible.nom + cible.cara)//affiche qui à était tuer par jason
    } else if (rand <= ProbDmg + ProbMourir) {//vérifie si le nombre random est inférieur à la somme de la chance de faire des dégats et de la chance de mourir
        attaquant.pointsDeVie -= 10//Si la vérification est vrai alors jason perd 10 Point de vie
        console.log(cible.nom + cible.cara + " a esquivé et a infligé 10 points de dégâts à " + attaquant.nom)//Affiche la personne qui à fait des dégats à Jason
    } else if (rand <= 10) {//Vérifie la dernière condition qui est donc si le survivant meurt mais inflige des dégats, pour cela on regarde juste si le nombre random est inférieur au nombre maximum atteignable, ici 10
        cible.enVie = false//si la vérification est vrai alors le survivant est mort
        attaquant.pointsDeVie -= 15//Si la vérification est vrai alors jason perd 15 Point de vie
        console.log(cible.nom + cible.cara + " a infligé 15 points de dégâts à " + attaquant.nom + " mais est mort")//affiche qu'elle survivant est mort
    }
}

while (Jason.pointsDeVie > 0 && survivants.some(s => s.enVie)) {//Boucle qui tourne tant que Jason n'est pas mort et que la somme des survivants soit supérieur au nombre de survivant en vie
    let randomSurvivant = survivants.filter(s => s.enVie)[Math.floor(Math.random() * survivants.filter(s => s.enVie).length)]//Permet de faire attaquer que les survivant qui sont en vie évitant de faire attaquer des personnages déjà mort
    attaquer(Jason, randomSurvivant)//Fonction d'attaque entre jason et un survivant
}
let ListMort = []//liste vide acceuillant tout les personnage mort
console.log("Morts : ")//afficher les personnages morts
survivants.filter(s => !s.enVie).forEach(mort => {//Boucle qui trie les personnages mort des personnages vivants
    console.log(mort.nom + mort.cara)//affiche le nom et la caractéristique des personnages morts
    ListMort.push(mort.nom + mort.cara)//Ajoute le nom et la caractéristique des personnages morts
})

if (Jason.pointsDeVie <= 0) {//Vérification de si jason est mort
    console.log("Les survivants ont gagné mais RIP à " + ListMort)//Si la vérification est vrai alors on montre que jason est mort et on affiche tout les survivants décéder
} else {//Si la vérification est fausse
    console.log('Jason a tué tous les survivants. Les survivants ont perdu.')//On affiche que Jason à gagner et que tout les survivants sont morts
}
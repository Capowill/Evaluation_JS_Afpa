function moyenneMinMax() {
    let tabVal = []; // totale
    let i = 0; // Valeur par defaut
    let tot = 0;
    tabVal[i] = parseInt(prompt("Entrez la valeur. (0 pour arrêter)"));
    i++;
    while (tabVal[i - 1] != 0) // différent de 0
    {
        tabVal[i] = parseInt(prompt("Entrez la valeur"));
        tot += tabVal[i];
        i++;
    }
    tabVal.splice((tabVal.length-1) , 1); // supprimer la derniere case d'un tableau (ici le 0)
    console.log("La moyenne est de : " + (tot / tabVal.length) + "\nMax : " + Math.max(...tabVal) + "\nMin : " + Math.min(...tabVal));
    alert("La moyenne est de : " + (tot / tabVal.length) + "\nMax : " + Math.max(...tabVal) + "\nMin : " + Math.min(...tabVal));
}
moyenneMinMax();